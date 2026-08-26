import { AgingAssist } from "./AgingAssist";
import type { AgingAssistInstance, AssistOptions } from "./types";
export declare const VERSION = "0.1.1";
export { AgingAssist };
export type { AgingAssistInstance, AssistEvent, AssistLabels, AssistLocale, AssistOptions, AssistState, AssistStateKey, AssistTheme, AssistToggleKey, SpeechRate, SubtitleMode } from "./types";
export declare function createAgingAssist(options?: AssistOptions): AgingAssistInstance;
export declare const create: typeof createAgingAssist;
export declare const init: typeof createAgingAssist;
declare global {
    interface Window {
        AgingAssist?: {
            create: typeof createAgingAssist;
            init: typeof createAgingAssist;
            AgingAssist: typeof AgingAssist;
            version: string;
        };
    }
}
