import type { SubtitleMode } from "./types";
export declare function convertSubtitleRuntime(text: string, mode: SubtitleMode): string;
export declare function convertPinyinPartsRuntime(text: string): {
    origin: string;
    pinyin: string;
}[];
