import OpenCC from "opencc-js";
import { pinyin } from "pinyin-pro";
import type { SubtitleMode } from "./types";

const toSimplified = OpenCC.Converter({ from: "tw", to: "cn" });
const toTraditional = OpenCC.Converter({ from: "cn", to: "tw" });

export function convertSubtitleRuntime(text: string, mode: SubtitleMode): string {
  if (mode === "traditional") return toTraditional(text);
  if (mode === "pinyin") {
    return pinyin(text, {
      toneType: "symbol",
      type: "string",
      nonZh: "consecutive"
    });
  }
  return toSimplified(text);
}

export function convertPinyinPartsRuntime(text: string) {
  return pinyin(text, {
    toneType: "symbol",
    type: "all",
    nonZh: "consecutive"
  }).map((part) => ({
    origin: part.origin,
    pinyin: part.pinyin
  }));
}

if (typeof window !== "undefined") {
  window.AgingAssistSubtitle = {
    convert: convertSubtitleRuntime,
    pinyinParts: convertPinyinPartsRuntime
  };
}
