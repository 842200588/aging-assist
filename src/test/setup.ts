import { afterEach, vi } from "vitest";

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

class SpeechSynthesisUtteranceMock {
  lang = "";
  rate = 1;
  pitch = 1;
  volume = 1;
  voice: SpeechSynthesisVoice | null = null;
  onstart: (() => void) | null = null;
  onboundary: ((event: SpeechSynthesisEvent) => void) | null = null;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;

  constructor(public text: string) {}
}

Object.defineProperty(globalThis, "ResizeObserver", {
  configurable: true,
  value: ResizeObserverMock
});
Object.defineProperty(globalThis, "SpeechSynthesisUtterance", {
  configurable: true,
  value: SpeechSynthesisUtteranceMock
});
Object.defineProperty(window, "speechSynthesis", {
  configurable: true,
  value: {
    cancel: vi.fn(),
    getVoices: vi.fn(() => []),
    pause: vi.fn(),
    resume: vi.fn(),
    speak: vi.fn((utterance: SpeechSynthesisUtteranceMock) => utterance.onstart?.())
  }
});

afterEach(() => {
  document.documentElement.removeAttribute("style");
  document.documentElement.getAttributeNames().forEach((name) => {
    if (name.startsWith("data-aging-")) document.documentElement.removeAttribute(name);
  });
  document.body.innerHTML = "";
  window.localStorage.clear();
  vi.clearAllMocks();
  vi.useRealTimers();
});
