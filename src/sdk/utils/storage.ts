import type { AssistState } from "../types";
import { normalizeStatePatch } from "./state";

export function loadState(key: string): Partial<AssistState> {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? normalizeStatePatch(JSON.parse(raw)) : {};
  } catch {
    return {};
  }
}

export function saveState(key: string, state: Partial<AssistState>): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(state));
  } catch {
    // localStorage can be blocked in private contexts.
  }
}

export function clearState(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // localStorage can be blocked in private contexts.
  }
}
