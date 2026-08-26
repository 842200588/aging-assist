interface Window {
  AgingAssistSubtitle?: {
    convert: (text: string, mode: import("./types").SubtitleMode) => string;
    pinyinParts: (text: string) => Array<{ origin: string; pinyin: string }>;
  };
}

declare const __AGING_ASSIST_IIFE__: boolean;
