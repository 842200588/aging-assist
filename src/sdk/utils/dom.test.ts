import { afterEach, describe, expect, it, vi } from "vitest";
import {
  cleanText,
  createElement,
  getReadableBlocks,
  getReadableText,
  resolveElement
} from "./dom";

afterEach(() => vi.restoreAllMocks());

describe("DOM utilities", () => {
  it("resolves and creates elements", () => {
    const target = createElement("button", { id: "target", title: "操作" });
    document.body.appendChild(target);
    expect(resolveElement("#target")).toBe(target);
    expect(resolveElement(target)).toBe(target);
    expect(resolveElement(null)).toBeNull();
  });

  it("prefers explicit accessible text and finds semantic ancestors", () => {
    const button = document.createElement("button");
    button.setAttribute("aria-label", "提交业务申请");
    button.innerHTML = "<svg><path></path></svg>";
    document.body.appendChild(button);
    expect(getReadableText(button.querySelector("path"))).toBe("提交业务申请");

    const input = document.createElement("input");
    input.placeholder = "请输入姓名";
    expect(getReadableText(input)).toBe("请输入姓名");

    const select = document.createElement("select");
    select.innerHTML = "<option>养老服务</option>";
    expect(getReadableText(select)).toBe("养老服务");
  });

  it("cleans noisy text with a safe length", () => {
    expect(cleanText("  服务  |  指南 <内容> ")).toBe("服务 指南 内容");
    expect(cleanText("字".repeat(300))).toHaveLength(240);
  });

  it("collects visible meaningful blocks and skips ignored duplicates", () => {
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      width: 100,
      height: 30,
      top: 0,
      right: 100,
      bottom: 30,
      left: 0,
      x: 0,
      y: 0,
      toJSON: () => ({})
    });
    document.body.innerHTML = `
      <main><p>有效的服务指南内容</p><p>有效的服务指南内容</p></main>
      <div data-aging-ignore><p>应该忽略的内容</p></div>
      <button aria-label="在线人工咨询">咨询</button>
    `;
    const blocks = getReadableBlocks();
    expect(blocks.map(getReadableText)).toEqual(["有效的服务指南内容", "在线人工咨询"]);
  });
});
