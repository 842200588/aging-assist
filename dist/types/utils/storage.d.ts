import type { AssistState } from "../types";
export declare function loadState(key: string): Partial<AssistState>;
export declare function saveState(key: string, state: Partial<AssistState>): void;
export declare function clearState(key: string): void;
