import { AgingAssist } from "./AgingAssist";
import type { AgingAssistInstance, AssistOptions } from "./types";

export const VERSION = "0.1.0";

export { AgingAssist };
export type {
  AgingAssistInstance,
  AssistEvent,
  AssistLabels,
  AssistOptions,
  AssistState,
  AssistStateKey,
  SpeechRate
} from "./types";

export function createAgingAssist(options: AssistOptions = {}): AgingAssistInstance {
  return new AgingAssist(options);
}

export const create = createAgingAssist;
export const init = createAgingAssist;

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

if (typeof window !== "undefined") {
  window.AgingAssist = {
    create: createAgingAssist,
    init: createAgingAssist,
    AgingAssist,
    version: VERSION
  };
}
