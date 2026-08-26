import type { SubtitleMode } from "../types";
export type PinyinPart = {
    origin: string;
    pinyin: string;
};
export declare function convertSubtitle(text: string, mode: SubtitleMode): Promise<string>;
export declare function convertSubtitlePinyinParts(text: string): Promise<PinyinPart[]>;
