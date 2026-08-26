import { nextTick } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AgingAssist } from "./AgingAssist";
import { createAgingAssist } from "./index";

let assist: AgingAssist | null = null;

async function flushUi() {
  await nextTick();
  await new Promise((resolve) => window.setTimeout(resolve, 0));
  await nextTick();
}

afterEach(() => {
  assist?.destroy();
  assist = null;
  const active = AgingAssist.getActiveInstance();
  active?.destroy();
});

describe("AgingAssist", () => {
  it("initializes idempotently and cleans up global effects", () => {
    const first = createAgingAssist({ persist: false }) as AgingAssist;
    const second = createAgingAssist({ persist: false });
    assist = first;
    expect(second).toBe(first);
    expect(document.querySelectorAll(".aging-assist-root")).toHaveLength(1);

    first.enable();
    expect(document.documentElement.dataset.agingEnabled).toBe("true");
    first.destroy();
    assist = null;
    expect(document.querySelector("[data-aging-assist-root]")).toBeNull();
    expect(document.documentElement.dataset.agingEnabled).toBeUndefined();
  });

  it("notifies key subscribers only when that key changes", () => {
    assist = new AgingAssist({ persist: false });
    const listener = vi.fn();
    assist.subscribeKey("pageScale", listener);
    assist.setState({ highContrast: true });
    assist.setState({ pageScale: 1.2 });
    assist.setState({ pageScale: 1.2 });
    expect(listener).toHaveBeenCalledTimes(2);
    expect(listener.mock.calls[1]?.[0]).toBe(1.2);
  });

  it("sanitizes public state patches", () => {
    assist = new AgingAssist({ persist: false });
    assist.setState({ pageScale: 99, fontScale: -1 });
    expect(assist.getState()).toMatchObject({ pageScale: 1.3, fontScale: 1 });
    assist.setState({ pageScale: Number.NaN });
    expect(assist.getState().pageScale).toBe(1.3);
  });

  it("scales fixed-size page text and restores original inline styles", async () => {
    const paragraph = document.createElement("p");
    paragraph.style.fontSize = "20px";
    paragraph.textContent = "固定字号的页面文字";
    document.body.appendChild(paragraph);
    assist = new AgingAssist({ persist: false });
    assist.open();
    assist.setState({ fontScale: 1.2 });
    await flushUi();

    expect(paragraph.style.fontSize).toBe("24px");
    assist.setState({ fontScale: 1 });
    expect(paragraph.style.fontSize).toBe("20px");
  });

  it("does not add an inline scale to inherited text and scales added content", async () => {
    const parent = document.createElement("div");
    parent.style.fontSize = "20px";
    parent.appendChild(document.createTextNode("父级文字 "));
    const inherited = document.createElement("span");
    inherited.textContent = "继承字号的文字";
    parent.appendChild(inherited);
    document.body.appendChild(parent);

    assist = new AgingAssist({ persist: false });
    assist.open();
    assist.setState({ fontScale: 1.2 });
    await flushUi();

    expect(parent.style.fontSize).toBe("24px");
    expect(inherited.style.fontSize).toBe("");

    const added = document.createElement("p");
    added.style.fontSize = "18px";
    added.textContent = "动态追加的固定字号文字";
    document.body.appendChild(added);
    await flushUi();

    expect(added.style.fontSize).toBe("21.6px");
  });

  it("keeps the runtime version aligned with the package release", () => {
    expect(window.AgingAssist?.version).toBe("0.1.1");
  });

  it("persists the subtitle display mode", () => {
    assist = new AgingAssist({ persist: true, storageKey: "subtitle-mode-test" });
    assist.setState({ subtitleMode: "pinyin" });
    assist.destroy();

    const next = new AgingAssist({ persist: true, storageKey: "subtitle-mode-test" });
    assist = next;
    expect(next.getState().subtitleMode).toBe("pinyin");
  });

  it("updates captions from keyboard focus and touch", async () => {
    const paragraph = document.createElement("p");
    paragraph.tabIndex = 0;
    paragraph.textContent = "键盘和触摸都能读取这段内容";
    document.body.appendChild(paragraph);
    assist = new AgingAssist({ persist: false });
    assist.setState({ enabled: true, bigText: true });

    paragraph.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    expect(assist.getState().currentText).toBe("键盘和触摸都能读取这段内容");

    paragraph.textContent = "触摸后的新内容";
    const pointerEvent = new Event("pointerup", { bubbles: true });
    Object.defineProperty(pointerEvent, "pointerType", { value: "touch" });
    paragraph.dispatchEvent(pointerEvent);
    expect(assist.getState().currentText).toBe("触摸后的新内容");
    await flushUi();
  });

  it("exposes pressed state and restores focus when the toolbar closes", async () => {
    const opener = document.createElement("button");
    opener.textContent = "业务入口";
    document.body.appendChild(opener);
    opener.focus();
    assist = new AgingAssist({ persist: false, showLauncher: false });
    assist.open();
    await flushUi();

    const contrast = Array.from(document.querySelectorAll<HTMLButtonElement>("button")).find(
      (button) => button.textContent?.includes("配色")
    );
    expect(contrast?.getAttribute("aria-pressed")).toBe("false");
    contrast?.click();
    await nextTick();
    expect(contrast?.getAttribute("aria-pressed")).toBe("true");

    assist.close();
    await flushUi();
    expect(document.activeElement).toBe(opener);
  });

  it("keeps high contrast enhancement switches inside the styled root", async () => {
    assist = new AgingAssist({ persist: false });
    assist.open();
    assist.setState({ highContrast: true, moreOpen: true });
    await flushUi();

    const root = document.querySelector<HTMLElement>("[data-aging-assist-root]");
    const panel = document.querySelector<HTMLElement>(".aging-assist-more");
    expect(document.documentElement.dataset.agingContrast).toBe("true");
    expect(root?.contains(panel)).toBe(true);
    expect(panel?.querySelectorAll(".aging-assist-switch")).toHaveLength(4);
  });

  it("cycles the color scheme and keeps the legacy highContrast flag aligned", () => {
    assist = new AgingAssist({ persist: false });
    expect(assist.getState()).toMatchObject({
      highContrast: false,
      contrastMode: "standard"
    });

    assist.toggle("highContrast");
    expect(assist.getState()).toMatchObject({
      highContrast: true,
      contrastMode: "white-black-blue"
    });
    assist.toggle("highContrast");
    expect(assist.getState().contrastMode).toBe("blue-yellow-white");
    assist.toggle("highContrast");
    expect(assist.getState().contrastMode).toBe("yellow-black-blue");
    assist.toggle("highContrast");
    expect(assist.getState().contrastMode).toBe("black-yellow-white");
    assist.toggle("highContrast");
    expect(assist.getState()).toMatchObject({
      highContrast: false,
      contrastMode: "standard"
    });
  });

  it("maps legacy contrast mode values to the matching reference schemes", () => {
    assist = new AgingAssist({
      persist: false,
      initialState: { contrastMode: "black-yellow" }
    });
    expect(assist.getState().contrastMode).toBe("black-yellow-white");

    assist.setState({ contrastMode: "blue" });
    expect(assist.getState().contrastMode).toBe("blue-yellow-white");
  });

  it("provides a labelled keyboard-dismissible confirmation dialog", async () => {
    const danger = document.createElement("button");
    danger.dataset.agingDanger = "true";
    danger.textContent = "删除记录";
    document.body.appendChild(danger);
    assist = new AgingAssist({ persist: false });
    assist.setState({ enabled: true, mistakeGuard: true });
    danger.focus();
    danger.click();
    await flushUi();

    const dialog = document.querySelector<HTMLElement>("[role='dialog']");
    expect(dialog?.getAttribute("aria-labelledby")).toBeTruthy();
    expect(dialog?.getAttribute("aria-describedby")).toBeTruthy();
    expect(document.activeElement?.textContent?.trim()).toBe("继续");

    dialog?.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await flushUi();
    expect(document.querySelector("[role='dialog']")).toBeNull();
    expect(document.activeElement).toBe(danger);
  });

  it("applies locale and theme options", async () => {
    assist = new AgingAssist({ persist: false, locale: "en-US", theme: "dark" });
    assist.open();
    await flushUi();
    const root = document.querySelector<HTMLElement>(".aging-assist-root");
    expect(root?.dataset.theme).toBe("dark");
    expect(root?.textContent).toContain("Reset");
    expect(root?.textContent).toContain("Speech rate");
  });

  it("keeps the complete toolbar control flow functional", async () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = "第一段可朗读内容";
    vi.spyOn(paragraph, "getBoundingClientRect").mockReturnValue({
      width: 200,
      height: 40,
      top: 0,
      right: 200,
      bottom: 40,
      left: 0,
      x: 0,
      y: 0,
      toJSON: () => ({})
    });
    document.body.appendChild(paragraph);
    assist = new AgingAssist({ persist: false });
    assist.open();
    await flushUi();

    const button = (label: string) =>
      Array.from(document.querySelectorAll<HTMLButtonElement>("button")).find(
        (item) => item.textContent?.trim() === label
      );

    button("文字放大")?.click();
    button("页面放大")?.click();
    button("大字幕")?.click();
    button("指读")?.click();
    button("语音朗读")?.click();
    button("下一段")?.click();
    await flushUi();
    expect(assist.getState()).toMatchObject({
      fontScale: 1.1,
      pageScale: 1.05,
      bigText: true,
      readingGuide: true,
      speech: true
    });
    expect(assist.getState().currentText).toBe("第一段可朗读内容");

    button("更多")?.click();
    await nextTick();
    const guard = Array.from(document.querySelectorAll<HTMLInputElement>("input[type='checkbox']"))
      .find((input) => input.closest("label")?.textContent?.includes("防误触"));
    guard?.click();
    expect(assist.getState().mistakeGuard).toBe(true);

    button("重置")?.click();
    expect(assist.getState()).toMatchObject({ fontScale: 1, pageScale: 1, bigText: false });
  });
});
