import { createApp, reactive } from "vue";
import type { App } from "vue";
import AssistPanel from "./components/AssistPanel.vue";
import { DEFAULT_NAMESPACE, DEFAULT_STORAGE_KEY, defaultState, labelsZhCn } from "./constants";
import "./styles/effects.css";
import "./styles/panel.css";
import type {
  AgingAssistInstance,
  AssistEvent,
  AssistLabels,
  AssistOptions,
  AssistState,
  AssistStateKey,
  SpeechRate
} from "./types";
import { clearState, loadState, saveState } from "./utils/storage";
import { cleanText, createElement, getReadableBlocks, getReadableText, resolveElement } from "./utils/dom";
import { SpeechController } from "./utils/speech";

export class AgingAssist implements AgingAssistInstance {
  public state: AssistState;

  private readonly options: Required<
    Pick<
      AssistOptions,
      | "namespace"
      | "storageKey"
      | "persist"
      | "locale"
      | "theme"
      | "position"
      | "autoMount"
      | "showLauncher"
      | "dangerousSelector"
      | "ignoredSelector"
    >
  > &
    Omit<
      AssistOptions,
      | "namespace"
      | "storageKey"
      | "persist"
      | "locale"
      | "theme"
      | "position"
      | "autoMount"
      | "showLauncher"
      | "dangerousSelector"
      | "ignoredSelector"
    >;

  private app: App<Element> | null = null;
  private host: HTMLElement | null = null;
  private labels: AssistLabels;
  private listeners = new Set<(state: AssistState) => void>();
  private speech = new SpeechController();
  private currentReadTarget: HTMLElement | null = null;
  private pendingDanger: HTMLElement | null = null;
  private pendingDangerAction: (() => void) | null = null;
  private lastSpokenText = "";
  private destroyed = false;
  private originalBodyPaddingBottom: string | null = null;
  private bigTextReserveApplied = false;
  private speechProgressTimer = 0;
  private speechProgressStartedAt = 0;
  private speechProgressElapsed = 0;
  private speechProgressDuration = 0;
  private hoverTimer = 0;
  private hoverTarget: Element | null = null;
  private crosshairFrame = 0;
  private crosshairPoint: { x: number; y: number } | null = null;

  private readonly onTriggerClick = (event: Event) => {
    event.preventDefault();
    this.open();
  };

  private readonly onMouseMove = (event: MouseEvent) => {
    this.queueCrosshairUpdate(event);
  };

  private readonly onMouseOver = (event: MouseEvent) => {
    this.queueHover(event.target as Element | null);
  };

  private readonly onDangerClick = (event: MouseEvent) => {
    if (!this.state.enabled || !this.state.mistakeGuard) return;
    const danger = this.findDangerElement(event.target);
    if (!danger || danger.dataset.agingAssistConfirmed === "true") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    this.requestDangerConfirmation(danger, () => {
      danger.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          composed: true,
          view: window
        })
      );
    });
  };

  private readonly onDangerSubmit = (event: SubmitEvent) => {
    if (!this.state.enabled || !this.state.mistakeGuard) return;
    const form = event.target instanceof HTMLFormElement ? event.target : null;
    const submitter = event.submitter instanceof HTMLElement ? event.submitter : null;
    const danger =
      this.findDangerElement(submitter) ??
      (form?.matches(this.options.dangerousSelector) ? form : null);
    if (!danger || danger.dataset.agingAssistConfirmed === "true") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    this.requestDangerConfirmation(danger, () => {
      if (!form) return;
      if (typeof form.requestSubmit === "function") {
        form.requestSubmit(submitter instanceof HTMLElement ? submitter : undefined);
      } else {
        form.submit();
      }
    });
  };

  constructor(options: AssistOptions = {}) {
    this.options = {
      namespace: options.namespace ?? DEFAULT_NAMESPACE,
      storageKey: options.storageKey ?? DEFAULT_STORAGE_KEY,
      persist: options.persist ?? true,
      locale: options.locale ?? "zh-CN",
      theme: options.theme ?? "warm",
      position: options.position ?? "top",
      autoMount: options.autoMount ?? true,
      showLauncher: options.showLauncher ?? true,
      dangerousSelector:
        options.dangerousSelector ??
        "[data-aging-danger], .danger, .delete, .dangerous, [type='submit'][data-danger='true']",
      ignoredSelector:
        options.ignoredSelector ??
        "[data-aging-ignore], [data-aging-assist-root], .qunar-assist-hide",
      ...options
    };
    const saved = this.options.persist ? loadState(this.options.storageKey) : {};
    const { bigTextDock: _savedBigTextDock, ...savedState } = saved as Partial<AssistState> & {
      bigTextDock?: unknown;
    };
    const {
      bigTextDock: _initialBigTextDock,
      ...initialState
    } = (options.initialState ?? {}) as Partial<AssistState> & { bigTextDock?: unknown };
    this.state = reactive({
      ...defaultState,
      ...savedState,
      ...initialState,
      currentText: "",
      confirming: false,
      toolbarOpen: false,
      moreOpen: false,
      speech: false,
      speechPaused: false,
      speechProgress: 0,
      statusMessage: "",
      readingIndex: -1
    }) as AssistState;
    this.labels = {
      ...labelsZhCn,
      ...options.labels
    };
    if (this.options.autoMount) this.mount();
  }

  mount(): void {
    if (this.app || this.destroyed) return;
    this.host = createElement("div", {
      id: `${this.options.namespace}-root`,
      "data-aging-assist-root": "true"
    });
    const container = resolveElement(this.options.container) ?? document.body;
    container.appendChild(this.host);
    this.app = createApp(AssistPanel, {
      state: this.state,
      labels: this.labels,
      position: this.options.position,
      showLauncher: this.options.showLauncher,
      onAction: (name: string, value?: unknown) => this.handleAction(name, value)
    });
    this.app.mount(this.host);
    this.bindTrigger();
    this.bindDocumentEvents();
    this.applyEffects();
    this.emit("init");
  }

  open(): void {
    this.setState({ enabled: true, toolbarOpen: true });
    this.emit("open");
  }

  close(): void {
    this.setState({ toolbarOpen: false, moreOpen: false });
    this.emit("close");
  }

  enable(): void {
    this.setState({ enabled: true, toolbarOpen: true });
    this.emit("enable");
  }

  disable(): void {
    this.speech.stop();
    this.stopSpeechProgressClock();
    this.clearHoverTimer();
    this.clearReadTarget();
    this.setState({
      ...defaultState,
      toolbarOpen: false,
      enabled: false,
      focusEnhance: true,
      formEnhance: true
    });
    if (this.options.persist) clearState(this.options.storageKey);
    this.applyEffects();
    this.emit("disable");
  }

  reset(): void {
    this.speech.stop();
    this.stopSpeechProgressClock();
    this.clearHoverTimer();
    this.clearReadTarget();
    this.setState({
      ...defaultState,
      enabled: true,
      toolbarOpen: true,
      focusEnhance: true,
      formEnhance: true
    });
    this.emit("reset");
  }

  destroy(): void {
    this.destroyed = true;
    this.speech.stop();
    this.stopSpeechProgressClock();
    this.clearHoverTimer();
    if (this.crosshairFrame) window.cancelAnimationFrame(this.crosshairFrame);
    this.crosshairFrame = 0;
    this.crosshairPoint = null;
    this.clearReadTarget();
    this.unbindTrigger();
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseover", this.onMouseOver);
    document.removeEventListener("click", this.onDangerClick, true);
    document.removeEventListener("submit", this.onDangerSubmit, true);
    this.app?.unmount();
    this.host?.remove();
    this.app = null;
    this.host = null;
    this.removeRootEffects();
  }

  speak(text: string): void {
    const safeText = cleanText(text);
    if (!safeText) return;
    this.setState({
      speech: true,
      speechPaused: false,
      speechProgress: 0,
      statusMessage: "",
      currentText: safeText
    });
    this.speakText(safeText);
    this.emit("speak", safeText);
  }

  pauseSpeech(): void {
    this.speech.pause();
    this.pauseSpeechProgressClock();
    this.setState({ speechPaused: true });
    this.emit("pause");
  }

  resumeSpeech(): void {
    this.speech.resume();
    this.setState({ speechPaused: false });
    this.resumeSpeechProgressClock();
    this.emit("resume");
  }

  getState(): AssistState {
    return { ...this.state };
  }

  setState(patch: Partial<AssistState>): void {
    Object.assign(this.state, patch);
    this.applyEffects();
    this.persist();
    this.notify();
    this.emit("change", patch);
  }

  subscribe(listener: (state: AssistState) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  subscribeKey<K extends AssistStateKey>(
    key: K,
    listener: (value: AssistState[K], state: AssistState) => void
  ): () => void {
    listener(this.state[key], this.getState());
    return this.subscribe((state) => {
      listener(state[key], state);
    });
  }

  private handleAction(name: string, value?: unknown): void {
    switch (name) {
      case "open":
        this.open();
        break;
      case "close":
        this.close();
        break;
      case "disable":
        this.disable();
        break;
      case "reset":
        this.reset();
        break;
      case "fontUp":
        this.setState({ fontScale: clamp(this.state.fontScale + 0.1, 1, 1.8) });
        break;
      case "fontDown":
        this.setState({ fontScale: clamp(this.state.fontScale - 0.1, 1, 1.8) });
        break;
      case "zoomIn":
        this.setState({ pageScale: clamp(this.state.pageScale + 0.05, 1, 1.3) });
        break;
      case "zoomOut":
        this.setState({ pageScale: clamp(this.state.pageScale - 0.05, 1, 1.3) });
        break;
      case "toggle":
        this.toggle(value as AssistStateKey);
        break;
      case "setBoolean": {
        const payload = value as { key: AssistStateKey; value: boolean };
        if (payload?.key) this.setBoolean(payload.key, payload.value);
        break;
      }
      case "toggleMore":
        this.setState({ moreOpen: !this.state.moreOpen });
        break;
      case "rate":
        this.setState({ speechRate: value as SpeechRate });
        if (this.state.currentText && this.state.speech) this.speak(this.state.currentText);
        break;
      case "readPrevious":
        this.readOffset(-1);
        break;
      case "readNext":
        this.readOffset(1);
        break;
      case "pauseSpeech":
        this.pauseSpeech();
        break;
      case "resumeSpeech":
        this.resumeSpeech();
        break;
      case "cancelDanger":
        this.cancelDanger();
        break;
      case "confirmDanger":
        this.confirmDanger();
        break;
    }
  }

  toggle(key: AssistStateKey): void {
    const value = this.state[key];
    if (typeof value !== "boolean") return;
    if (key === "speech") {
      if (value) {
        this.speech.stop();
        this.stopSpeechProgressClock();
        this.setState({ speech: false, speechPaused: false, speechProgress: 0, statusMessage: "" });
      } else {
        this.setState({ speech: true, speechPaused: false, speechProgress: 0, statusMessage: "" });
        if (this.state.currentText) {
          this.lastSpokenText = this.state.currentText;
          this.speakText(this.state.currentText);
        }
      }
      return;
    }
    const patch = { [key]: !value } as Partial<AssistState>;
    if (key === "readingGuide" && value) this.clearReadTarget();
    this.setState(patch);
  }

  private setBoolean(key: AssistStateKey, value: boolean): void {
    this.setState({ [key]: value } as Partial<AssistState>);
  }

  private readOffset(offset: number): void {
    const blocks = getReadableBlocks();
    if (!blocks.length) return;
    const next = clamp(this.state.readingIndex + offset, 0, blocks.length - 1);
    const target = blocks[next];
    const text = getReadableText(target);
    this.highlightTarget(target);
    this.lastSpokenText = text;
    this.setState({
      readingIndex: next,
      currentText: text,
      speech: true,
      speechPaused: false,
      speechProgress: 0,
      statusMessage: ""
    });
    this.speakText(text);
  }

  private bindTrigger(): void {
    const trigger = resolveElement(this.options.trigger);
    trigger?.addEventListener("click", this.onTriggerClick);
  }

  private unbindTrigger(): void {
    const trigger = resolveElement(this.options.trigger);
    trigger?.removeEventListener("click", this.onTriggerClick);
  }

  private bindDocumentEvents(): void {
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseover", this.onMouseOver);
    document.addEventListener("click", this.onDangerClick, true);
    document.addEventListener("submit", this.onDangerSubmit, true);
  }

  private findDangerElement(target: EventTarget | null): HTMLElement | null {
    const element =
      target instanceof HTMLElement
        ? target
        : target instanceof Node
          ? target.parentElement
          : null;
    return element?.closest<HTMLElement>(this.options.dangerousSelector) ?? null;
  }

  private queueCrosshairUpdate(event: MouseEvent): void {
    if (!this.state.enabled || !this.state.crosshair) return;
    this.crosshairPoint = { x: event.clientX, y: event.clientY };
    if (this.crosshairFrame) return;
    this.crosshairFrame = window.requestAnimationFrame(() => {
      this.crosshairFrame = 0;
      if (!this.crosshairPoint) return;
      this.updateCrosshair(this.crosshairPoint.x, this.crosshairPoint.y);
    });
  }

  private updateCrosshair(xPosition: number, yPosition: number): void {
    const root = this.host;
    const x = root?.querySelector<HTMLElement>(".aging-assist-crosshair-x");
    const y = root?.querySelector<HTMLElement>(".aging-assist-crosshair-y");
    if (x) x.style.top = `${yPosition}px`;
    if (y) y.style.left = `${xPosition}px`;
  }

  private queueHover(target: Element | null): void {
    if (target === this.hoverTarget && this.hoverTimer) return;
    this.clearHoverTimer();
    if (!this.state.enabled || target?.closest(this.options.ignoredSelector)) {
      return;
    }
    if (!this.state.readingGuide && !this.state.bigText && !this.state.speech) {
      return;
    }
    const text = getReadableText(target);
    if (!text) {
      return;
    }

    if (this.state.readingGuide || this.state.bigText) {
      this.applyHoverTarget(target, text, false);
    }

    if (!this.state.speech || text === this.lastSpokenText) {
      return;
    }

    this.hoverTarget = target;
    this.hoverTimer = window.setTimeout(() => {
      this.hoverTimer = 0;
      this.hoverTarget = null;
      this.applyHoverTarget(target, text, true);
    }, 220);
  }

  private clearHoverTimer(): void {
    if (this.hoverTimer) window.clearTimeout(this.hoverTimer);
    this.hoverTimer = 0;
    this.hoverTarget = null;
  }

  private applyHoverTarget(target: Element | null, text: string, shouldSpeak: boolean): void {
    const patch: Partial<AssistState> = {};
    if (this.state.currentText !== text || shouldSpeak) {
      patch.currentText = text;
    }
    if (shouldSpeak) {
      patch.speechPaused = false;
      patch.speechProgress = 0;
      patch.statusMessage = "";
    }

    if (Object.keys(patch).length) this.setState(patch);

    if (
      this.state.readingGuide &&
      target instanceof HTMLElement &&
      target !== this.currentReadTarget
    ) {
      this.highlightTarget(target);
    }
    if (shouldSpeak) {
      this.lastSpokenText = text;
      this.speakText(text);
    }
  }

  private speakText(text: string): void {
    this.stopSpeechProgressClock();
    const started = this.speech.speak(text, this.state.speechRate, {
      onBoundary: (progress) => this.updateSpeechProgress(progress),
      onEnd: () => {
        this.updateSpeechProgress(1);
        this.stopSpeechProgressClock();
      },
      onError: () => this.stopSpeechProgressClock()
    });
    if (!started) {
      this.setState({
        speech: false,
        speechPaused: false,
        speechProgress: 0,
        statusMessage: "当前浏览器不支持朗读"
      });
      return;
    }
    this.startSpeechProgressClock(text);
  }

  private updateSpeechProgress(progress: number): void {
    const next = Math.max(this.state.speechProgress, clamp(progress, 0, 1));
    if (Math.abs(this.state.speechProgress - next) < 0.01 && next !== 0 && next !== 1) {
      return;
    }
    this.state.speechProgress = next;
    this.notify();
  }

  private startSpeechProgressClock(text: string): void {
    this.stopSpeechProgressClock();
    this.speechProgressElapsed = 0;
    this.speechProgressDuration = estimateSpeechDuration(text, this.state.speechRate);
    this.speechProgressStartedAt = window.performance.now();
    this.queueSpeechProgressTick();
  }

  private pauseSpeechProgressClock(): void {
    if (this.speechProgressTimer) window.clearTimeout(this.speechProgressTimer);
    this.speechProgressTimer = 0;
    if (!this.speechProgressStartedAt) return;
    this.speechProgressElapsed += window.performance.now() - this.speechProgressStartedAt;
    this.speechProgressStartedAt = 0;
  }

  private resumeSpeechProgressClock(): void {
    if (!this.state.speech || this.state.speechPaused || !this.speechProgressDuration) return;
    this.speechProgressStartedAt = window.performance.now();
    this.queueSpeechProgressTick();
  }

  private stopSpeechProgressClock(): void {
    if (this.speechProgressTimer) window.clearTimeout(this.speechProgressTimer);
    this.speechProgressTimer = 0;
    this.speechProgressStartedAt = 0;
    this.speechProgressElapsed = 0;
    this.speechProgressDuration = 0;
  }

  private queueSpeechProgressTick(): void {
    if (this.speechProgressTimer) window.clearTimeout(this.speechProgressTimer);
    this.speechProgressTimer = window.setTimeout(() => {
      this.speechProgressTimer = 0;
      if (!this.state.speech || this.state.speechPaused || !this.speechProgressDuration) return;
      const elapsed =
        this.speechProgressElapsed +
        (this.speechProgressStartedAt ? window.performance.now() - this.speechProgressStartedAt : 0);
      this.updateSpeechProgress(Math.min(0.98, elapsed / this.speechProgressDuration));
      this.queueSpeechProgressTick();
    }, 120);
  }

  private highlightTarget(target: HTMLElement): void {
    this.clearReadTarget();
    this.currentReadTarget = target;
    target.classList.add("aging-assist-read-target");
  }

  private clearReadTarget(): void {
    this.currentReadTarget?.classList.remove("aging-assist-read-target");
    this.currentReadTarget = null;
  }

  private cancelDanger(): void {
    this.pendingDanger?.classList.remove("aging-assist-danger-focus");
    this.pendingDanger = null;
    this.pendingDangerAction = null;
    this.setState({ confirming: false });
  }

  private confirmDanger(): void {
    const target = this.pendingDanger;
    const action = this.pendingDangerAction;
    if (!target || !action) {
      this.cancelDanger();
      return;
    }
    target.dataset.agingAssistConfirmed = "true";
    target.classList.remove("aging-assist-danger-focus");
    this.pendingDanger = null;
    this.pendingDangerAction = null;
    this.setState({ confirming: false });
    action();
    this.emit("confirm", target);
    window.setTimeout(() => {
      if (target) delete target.dataset.agingAssistConfirmed;
    }, 0);
  }

  private requestDangerConfirmation(target: HTMLElement, action: () => void): void {
    this.pendingDanger?.classList.remove("aging-assist-danger-focus");
    this.pendingDanger = target;
    this.pendingDangerAction = action;
    this.setState({ confirming: true });
    target.classList.add("aging-assist-danger-focus");
    window.setTimeout(() => {
      this.host?.querySelector<HTMLButtonElement>("[data-aging-confirm-primary]")?.focus();
    });
  }

  private applyEffects(): void {
    const root = document.documentElement;
    const shouldReserveBigTextSpace = this.state.enabled && this.state.bigText;

    if (
      shouldReserveBigTextSpace &&
      !this.bigTextReserveApplied &&
      document.body
    ) {
      this.originalBodyPaddingBottom = window.getComputedStyle(document.body).paddingBottom || "0px";
    }

    root.dataset.agingEnabled = String(this.state.enabled);
    root.dataset.agingContrast = String(this.state.highContrast);
    root.dataset.agingSimplified = String(this.state.simplified);
    root.dataset.agingLargeCursor = String(this.state.largeCursor);
    root.dataset.agingFocus = String(this.state.focusEnhance);
    root.dataset.agingClick = String(this.state.clickEnhance);
    root.dataset.agingForm = String(this.state.formEnhance);
    root.dataset.agingMistakeGuard = String(this.state.mistakeGuard);
    root.dataset.agingBigText = String(this.state.bigText);
    root.dataset.agingToolbarPosition = this.options.position;
    root.dataset.agingFontScale = String(this.state.fontScale);
    root.style.setProperty("--aging-assist-font-scale", String(this.state.fontScale));
    root.style.setProperty("--aging-assist-page-scale", String(this.state.pageScale));
    root.style.setProperty(
      "--aging-assist-body-padding-bottom",
      this.originalBodyPaddingBottom ?? "0px"
    );

    if (!shouldReserveBigTextSpace && this.bigTextReserveApplied) {
      this.originalBodyPaddingBottom = null;
      root.style.setProperty("--aging-assist-body-padding-bottom", "0px");
    }
    this.bigTextReserveApplied = shouldReserveBigTextSpace;

    if (this.host) {
      this.host.style.zoom = String(1 / this.state.pageScale);
    }
  }

  private removeRootEffects(): void {
    const root = document.documentElement;
    [
      "agingEnabled",
      "agingContrast",
      "agingSimplified",
      "agingLargeCursor",
      "agingFocus",
      "agingClick",
      "agingForm",
      "agingMistakeGuard",
      "agingBigText",
      "agingToolbarPosition",
      "agingFontScale"
    ].forEach((key) => {
      delete root.dataset[key as keyof DOMStringMap];
    });
    root.style.removeProperty("--aging-assist-font-scale");
    root.style.removeProperty("--aging-assist-page-scale");
    root.style.removeProperty("--aging-assist-body-padding-bottom");
    this.originalBodyPaddingBottom = null;
    this.bigTextReserveApplied = false;
    if (this.host) {
      this.host.style.zoom = "";
    }
  }

  private persist(): void {
    if (!this.options.persist) return;
    const next: Partial<AssistState> = {
      enabled: this.state.enabled,
      fontScale: this.state.fontScale,
      pageScale: this.state.pageScale,
      highContrast: this.state.highContrast,
      simplified: this.state.simplified,
      largeCursor: this.state.largeCursor,
      crosshair: this.state.crosshair,
      readingGuide: this.state.readingGuide,
      bigText: this.state.bigText,
      speechRate: this.state.speechRate,
      focusEnhance: this.state.focusEnhance,
      clickEnhance: this.state.clickEnhance,
      formEnhance: this.state.formEnhance,
      mistakeGuard: this.state.mistakeGuard
    };
    saveState(this.options.storageKey, next);
  }

  private notify(): void {
    const snapshot = this.getState();
    this.options.onChange?.(snapshot);
    this.listeners.forEach((listener) => listener(snapshot));
  }

  private emit(type: AssistEvent["type"], detail?: unknown): void {
    this.options.onEvent?.({
      type,
      state: this.getState(),
      detail
    });
  }
}

function clamp(value: number, min: number, max: number): number {
  return Number(Math.min(max, Math.max(min, value)).toFixed(2));
}

function estimateSpeechDuration(text: string, rate: SpeechRate): number {
  const compactLength = Math.max(text.replace(/\s+/g, "").length, 8);
  return Math.max(2600, (compactLength * 210) / rate);
}
