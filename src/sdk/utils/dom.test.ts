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
    expect(getReadableText(button.querySelector("path"))).toBe("提交业务申请按钮");

    const input = document.createElement("input");
    input.placeholder = "请输入姓名";
    expect(getReadableText(input)).toBe("文本输入框，当前内容为空");

    const select = document.createElement("select");
    select.innerHTML = "<option>养老服务</option>";
    expect(getReadableText(select)).toBe("列表框，当前选中项为养老服务");
  });

  it("adds link, image and form semantics to readable text", () => {
    const link = document.createElement("a");
    link.href = "https://example.com/service";
    link.target = "_blank";
    link.innerHTML = '<img alt="服务官网" src="logo.png">';
    document.body.appendChild(link);
    expect(getReadableText(link)).toBe("打开窗口，外部链接，图片，服务官网");

    const label = document.createElement("label");
    label.innerHTML = "姓名：<input placeholder=\"请输入姓名\">";
    document.body.appendChild(label);
    expect(getReadableText(label.querySelector("input"))).toBe(
      "姓名：文本输入框，当前内容为空"
    );

    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = "女 <input type=\"radio\" checked>";
    document.body.appendChild(optionLabel);
    expect(getReadableText(optionLabel.querySelector("input"))).toBe(
      "女单选按钮，当前已选中"
    );
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
    expect(blocks.map(getReadableText)).toEqual(["有效的服务指南内容", "在线人工咨询按钮"]);
  });
});
