import { describe, expect, it } from "vitest";
import { defaultState } from "../constants";
import { enforceStateInvariants, normalizeStatePatch } from "./state";

describe("state normalization", () => {
  it("accepts known values and clamps numeric ranges", () => {
    expect(
      normalizeStatePatch({
        enabled: true,
        pageScale: 9,
        fontScale: 0,
        speechProgress: 2,
        speechRate: 1.25,
        readingIndex: -20,
        unknown: "ignored"
      })
    ).toEqual({
      enabled: true,
      pageScale: 1.3,
      fontScale: 1,
      speechProgress: 1,
      speechRate: 1.25,
      readingIndex: -1
    });
  });

  it("rejects malformed persisted state", () => {
    expect(normalizeStatePatch(null)).toEqual({});
    expect(normalizeStatePatch([])).toEqual({});
    expect(normalizeStatePatch({ enabled: "yes", pageScale: Number.NaN })).toEqual({});
  });

  it("keeps dependent UI state consistent", () => {
    const disabled = enforceStateInvariants({
      ...defaultState,
      enabled: false,
      toolbarOpen: true,
      moreOpen: true,
      confirming: true,
      speech: true,
      speechPaused: true,
      speechProgress: 0.5
    });
    expect(disabled).toMatchObject({
      toolbarOpen: false,
      moreOpen: false,
      confirming: false,
      speech: false,
      speechPaused: false,
      speechProgress: 0
    });
  });
});
