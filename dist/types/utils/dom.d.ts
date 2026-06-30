export declare function resolveElement(target?: string | HTMLElement | null): HTMLElement | null;
export declare function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, attributes?: Record<string, string>): HTMLElementTagNameMap[K];
export declare function getReadableText(target: Element | null): string;
export declare function cleanText(text: string): string;
export declare function getReadableBlocks(root?: HTMLElement): HTMLElement[];
