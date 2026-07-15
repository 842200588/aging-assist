import type { AssistState } from "../types";
export declare function normalizeStatePatch(input: unknown): Partial<AssistState>;
export declare function enforceStateInvariants(state: AssistState): AssistState;
