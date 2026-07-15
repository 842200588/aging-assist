import { describe, expect, it } from "vitest";
import { clearState, loadState, saveState } from "./storage";

describe("storage utilities", () => {
  it("round-trips validated preferences", () => {
    saveState("assist-test", { enabled: true, pageScale: 1.2 });
    expect(loadState("assist-test")).toEqual({ enabled: true, pageScale: 1.2 });
    clearState("assist-test");
    expect(loadState("assist-test")).toEqual({});
  });

  it("ignores invalid JSON and malformed values", () => {
    window.localStorage.setItem("assist-test", "not-json");
    expect(loadState("assist-test")).toEqual({});
    window.localStorage.setItem("assist-test", JSON.stringify({ pageScale: "huge" }));
    expect(loadState("assist-test")).toEqual({});
  });
});
