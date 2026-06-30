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
  const readable = target.closest<HTMLElement>("[data-aging-readable], [data-aging-text]");
  if (readable && readable !== target && !isFormControl(target)) {
    return getReadableText(readable);
  }
  const explicit = target.getAttribute("data-aging-text") || target.getAttribute("data-aging-label");
  const ariaLabel = target.getAttribute("aria-label");
  const title = target.getAttribute("title");
  const alt =
    target instanceof HTMLImageElement ? target.getAttribute("alt") : "";
  const value =
    target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement
      ? target.value || target.placeholder
      : target instanceof HTMLSelectElement
        ? target.selectedOptions[0]?.textContent || target.value
        : "";
  const text = target.textContent || "";
  return cleanText(explicit || ariaLabel || title || alt || value || text);
}

export function cleanText(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .replace(/[|_~`^*#<>[\]{}\\]/g, "")
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
