import type { AgingAssistInstance } from "../sdk";

declare global {
  interface Window {
    __agingAssist?: AgingAssistInstance;
  }
}

export {};
