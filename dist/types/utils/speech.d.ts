import type { SpeechRate } from "../types";
export interface SpeechCallbacks {
    onStart?: () => void;
    onBoundary?: (progress: number) => void;
    onEnd?: () => void;
    onError?: () => void;
}
export declare class SpeechController {
    private utterance;
    get supported(): boolean;
    speak(text: string, rate: SpeechRate, callbacks?: SpeechCallbacks): boolean;
    pause(): void;
    resume(): void;
    stop(): void;
    private clearUtteranceHandlers;
}
