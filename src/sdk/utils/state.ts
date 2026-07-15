import type { AssistState, SpeechRate } from "../types";

const booleanKeys = [
  "enabled",
  "toolbarOpen",
  "moreOpen",
  "confirming",
  "highContrast",
  "simplified",
  "largeCursor",
  "crosshair",
  "readingGuide",
  "bigText",
  "speech",
  "speechPaused",
  "focusEnhance",
  "clickEnhance",
  "formEnhance",
  "mistakeGuard"
] as const satisfies ReadonlyArray<keyof AssistState>;

const speechRates = new Set<SpeechRate>([0.75, 1, 1.25, 1.5]);

export function normalizeStatePatch(input: unknown): Partial<AssistState> {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {};
  const source = input as Record<string, unknown>;
  const patch: Partial<AssistState> = {};

  booleanKeys.forEach((key) => {
    if (typeof source[key] === "boolean") {
      Object.assign(patch, { [key]: source[key] });
    }
  });

  if (typeof source.fontScale === "number" && Number.isFinite(source.fontScale)) {
    patch.fontScale = clamp(source.fontScale, 1, 1.8);
  }
  if (typeof source.pageScale === "number" && Number.isFinite(source.pageScale)) {
    patch.pageScale = clamp(source.pageScale, 1, 1.3);
  }
  if (typeof source.speechProgress === "number" && Number.isFinite(source.speechProgress)) {
    patch.speechProgress = clamp(source.speechProgress, 0, 1);
  }
  if (speechRates.has(source.speechRate as SpeechRate)) {
    patch.speechRate = source.speechRate as SpeechRate;
  }
  if (typeof source.statusMessage === "string") {
    patch.statusMessage = source.statusMessage.slice(0, 240);
  }
  if (typeof source.currentText === "string") {
    patch.currentText = source.currentText.slice(0, 240);
  }
  if (typeof source.readingIndex === "number" && Number.isInteger(source.readingIndex)) {
    patch.readingIndex = Math.max(-1, source.readingIndex);
  }

  return patch;
}

export function enforceStateInvariants(state: AssistState): AssistState {
  const next = { ...state };
  if (!next.enabled) {
    next.toolbarOpen = false;
    next.moreOpen = false;
    next.confirming = false;
    next.speech = false;
    next.speechPaused = false;
    next.speechProgress = 0;
  }
  if (!next.toolbarOpen) next.moreOpen = false;
  if (!next.speech) {
    next.speechPaused = false;
    next.speechProgress = 0;
  }
  return next;
}

function clamp(value: number, min: number, max: number): number {
  return Number(Math.min(max, Math.max(min, value)).toFixed(2));
}
