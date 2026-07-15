import type { AssistLocale, SpeechRate } from "../types";

export interface SpeechCallbacks {
  onStart?: () => void;
  onBoundary?: (progress: number) => void;
  onEnd?: () => void;
  onError?: () => void;
}

export class SpeechController {
  private utterance: SpeechSynthesisUtterance | null = null;

  get supported(): boolean {
    return typeof window !== "undefined" && "speechSynthesis" in window;
  }

  speak(
    text: string,
    rate: SpeechRate,
    locale: AssistLocale,
    callbacks: SpeechCallbacks = {}
  ): boolean {
    if (!this.supported || !text) return false;
    this.stop();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = locale;
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;
    const voice = window.speechSynthesis
      .getVoices()
      .find((item) => item.lang.toLowerCase().startsWith(locale.slice(0, 2).toLowerCase()));
    if (voice) utterance.voice = voice;
    utterance.onstart = () => callbacks.onStart?.();
    utterance.onboundary = (event) => {
      callbacks.onBoundary?.(toSpeechProgress(event.charIndex, text.length));
    };
    utterance.onend = () => {
      if (this.utterance !== utterance) return;
      callbacks.onBoundary?.(1);
      callbacks.onEnd?.();
      this.utterance = null;
    };
    utterance.onerror = () => {
      if (this.utterance !== utterance) return;
      callbacks.onError?.();
      this.utterance = null;
    };
    this.utterance = utterance;
    window.speechSynthesis.speak(utterance);
    return true;
  }

  pause(): void {
    if (this.supported) window.speechSynthesis.pause();
  }

  resume(): void {
    if (this.supported) window.speechSynthesis.resume();
  }

  stop(): void {
    this.clearUtteranceHandlers();
    if (this.supported) window.speechSynthesis.cancel();
    this.utterance = null;
  }

  private clearUtteranceHandlers(): void {
    if (!this.utterance) return;
    this.utterance.onstart = null;
    this.utterance.onboundary = null;
    this.utterance.onend = null;
    this.utterance.onerror = null;
  }
}

function toSpeechProgress(charIndex: number, textLength: number): number {
  if (!textLength) return 0;
  return Math.min(1, Math.max(0, charIndex / textLength));
}
