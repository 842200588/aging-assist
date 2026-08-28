export function resolveElement(
  target?: string | HTMLElement | null
): HTMLElement | null {
  if (!target) return null;
  if (typeof target === "string") {
    return document.querySelector<HTMLElement>(target);
  }
  return target;
}

export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  attributes: Record<string, string> = {}
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

export function getReadableText(target: Element | null): string {
  if (!target) return "";
  if (target.closest("[data-aging-assist-root]")) return "";
  const semanticTarget =
    target.closest<HTMLElement>(
      "[data-aging-text], [data-aging-label], button, a, label, input, textarea, select, img, h1, h2, h3, h4, h5, h6, p, li, td, th, summary, [role='button'], [title], [aria-label]"
    ) ?? (target instanceof HTMLElement ? target : target.parentElement);
  if (!semanticTarget) return "";
  const readable = semanticTarget.closest<HTMLElement>("[data-aging-readable], [data-aging-text]");
  const source =
    readable && readable !== semanticTarget && !isFormControl(semanticTarget)
      ? readable
      : semanticTarget;
  const explicit = source.getAttribute("data-aging-text") || source.getAttribute("data-aging-label");
  const ariaLabel = source.getAttribute("aria-label");
  const title = source.getAttribute("title");
  const alt =
    source instanceof HTMLImageElement ? source.getAttribute("alt") : "";
  const linkedImageAlt =
    source instanceof HTMLAnchorElement
      ? source.querySelector("img")?.getAttribute("alt") || ""
      : "";
  const value = getControlValue(source);
  const text = source.textContent || "";
  const content = explicit || ariaLabel || title || alt || linkedImageAlt || value || text;
  if (source instanceof HTMLButtonElement) {
    return cleanText(`${content}按钮`);
  }
  const semantic = getSemanticPrefix(source);
  if (isFormControl(source) && !(source instanceof HTMLButtonElement)) {
    return cleanText(semantic.replace(/，$/, ""));
  }
  return cleanText(`${semantic}${content}`);
}

function getSemanticPrefix(source: HTMLElement): string {
  const parts: string[] = [];
  const link = source instanceof HTMLAnchorElement ? source : source.closest("a");

  if (link) {
    if (link.target === "_blank") parts.push("打开窗口");
    if (isExternalLink(link)) parts.push("外部链接");
    if (source instanceof HTMLImageElement || link.querySelector("img")) parts.push("图片");
    else parts.push("链接");
  } else if (source instanceof HTMLImageElement) {
    parts.push("图片");
  }

  if (source instanceof HTMLInputElement) {
    const label = getControlLabel(source);
    if (["button", "submit", "reset"].includes(source.type)) {
      return `${label || source.value || (source.type === "reset" ? "重置" : "提交")}按钮，`;
    }
    if (source.type === "radio" || source.type === "checkbox") {
      const type = source.type === "radio" ? "单选按钮" : "复选框";
      return `${label}${type}，当前${source.checked ? "已选中" : "未选中"}，`;
    }
    const labelPrefix = label ? `${label}：` : "";
    parts.push(`${labelPrefix}${getInputTypeLabel(source)}`);
    if (source.type === "password") {
      parts.push(`当前${source.value ? "已填写" : "未填写"}`);
    } else {
      parts.push(`当前内容为${source.value || "空"}`);
    }
  } else if (source instanceof HTMLTextAreaElement) {
    const label = getControlLabel(source);
    parts.push(`${label ? `${label}：` : ""}多行文本输入框`);
    parts.push(`当前内容为${source.value || "空"}`);
  } else if (source instanceof HTMLSelectElement) {
    const selected = cleanText(source.selectedOptions[0]?.textContent || source.value || "空");
    const label = getControlLabel(source);
    parts.push(`${label ? `${label}：` : ""}列表框`);
    parts.push(`当前选中项为${selected}`);
  }
  return parts.length ? `${parts.join("，")}，` : "";
}

function getControlValue(source: HTMLElement): string {
  if (source instanceof HTMLInputElement || source instanceof HTMLTextAreaElement) {
    return source.type === "password" ? "" : source.value || source.placeholder;
  }
  if (source instanceof HTMLSelectElement) {
    return source.selectedOptions[0]?.textContent || source.value;
  }
  return "";
}

function getControlLabel(
  source: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
): string {
  const explicit = source.getAttribute("aria-label") || source.getAttribute("data-aging-label");
  if (explicit) return cleanText(explicit);
  const label = source.labels?.[0] || source.closest("label");
  if (!label) return "";
  const clone = label.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("input, textarea, select, button").forEach((control) => control.remove());
  return cleanText(clone.textContent || "").replace(/[：:，,\s]+$/, "");
}

function getInputTypeLabel(source: HTMLInputElement): string {
  switch (source.type) {
    case "password":
      return "密码输入框";
    case "radio":
      return "单选按钮";
    case "checkbox":
      return "复选框";
    case "file":
      return "文件选择框";
    case "tel":
      return "电话输入框";
    case "email":
      return "邮箱输入框";
    case "number":
      return "数字输入框";
    default:
      return "文本输入框";
  }
}

function isExternalLink(link: HTMLAnchorElement): boolean {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("/")) return false;
  if (/^(mailto:|tel:|javascript:)/i.test(href)) return true;
  try {
    return new URL(link.href, window.location.href).hostname !== window.location.hostname;
  } catch {
    return false;
  }
}

export function cleanText(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/[|_~`^*#<>[\]{}\\]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240);
}

export function getReadableBlocks(root = document.body): HTMLElement[] {
  const selector = [
    "[data-aging-text]",
    "[data-aging-readable]",
    ".qunar-assist-long-text",
    "main p",
    "main li",
    "main h1",
    "main h2",
    "main h3",
    "article p",
    "article li",
    "article h1",
    "article h2",
    "article h3",
    "p",
    "li",
    "h1",
    "h2",
    "h3",
    "button",
    "a",
    "label",
    "summary",
    "[role='button']",
    "[title]",
    "[aria-label]"
  ].join(",");

  const seen = new Set<string>();
  return Array.from(root.querySelectorAll<HTMLElement>(selector))
    .filter((element) => {
      if (element.closest("[data-aging-assist-root]")) return false;
      if (element.closest("[data-aging-ignore], .qunar-assist-hide")) return false;
      if (element.closest("[data-aging-readable]") && !element.matches("[data-aging-readable]")) {
        return false;
      }
      const rect = element.getBoundingClientRect();
      const text = getReadableText(element);
      if (!text || rect.width <= 0 || rect.height <= 0) return false;
      if (!isMeaningfulReadableBlock(element, text)) return false;
      if (seen.has(text)) return false;
      seen.add(text);
      return true;
    });
}

function isFormControl(target: Element): boolean {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement ||
    target instanceof HTMLButtonElement
  );
}

function isMeaningfulReadableBlock(element: HTMLElement, text: string): boolean {
  if (element.matches("[data-aging-text], [data-aging-readable], .qunar-assist-long-text")) {
    return text.length >= 2;
  }
  if (element.matches("h1, h2, h3, p, li, summary")) {
    return text.length >= 4;
  }
  if (element.matches("button, a, [role='button'], [title], [aria-label], label")) {
    return text.length >= 4;
  }
  return text.length >= 6;
}
