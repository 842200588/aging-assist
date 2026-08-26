import { describe, expect, it } from "vitest";
import { convertSubtitle } from "./subtitle";

describe("subtitle conversion", () => {
  it("converts traditional and simplified captions", async () => {
    await expect(convertSubtitle("簡體中文", "simplified")).resolves.toBe("简体中文");
    await expect(convertSubtitle("简体中文", "traditional")).resolves.toBe("簡體中文");
  });

  it("converts Chinese captions to tone-marked pinyin", async () => {
    await expect(convertSubtitle("适老化工具", "pinyin")).resolves.toBe("shì lǎo huà gōng jù");
  });
});
