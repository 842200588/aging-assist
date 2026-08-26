import type { SubtitleMode } from "../types";

export type PinyinPart = { origin: string; pinyin: string };
type SubtitleRuntime = {
  convert: (text: string, mode: SubtitleMode) => string;
  pinyinParts: (text: string) => PinyinPart[];
};

let runtimePromise: Promise<SubtitleRuntime> | null = null;
let runtime: SubtitleRuntime | null = null;
const isIifeBuild =
  typeof __AGING_ASSIST_IIFE__ !== "undefined" && __AGING_ASSIST_IIFE__;

function loadScript(url: string): Promise<SubtitleRuntime> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${url}"]`);
    if (existing) {
      if (window.AgingAssistSubtitle) {
        resolve(window.AgingAssistSubtitle);
        return;
      }
      existing.addEventListener("load", () => resolve(window.AgingAssistSubtitle!), {
        once: true
      });
      existing.addEventListener("error", () => reject(new Error("subtitle runtime failed")), {
        once: true
      });
      return;
    }
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = () => {
      if (window.AgingAssistSubtitle) resolve(window.AgingAssistSubtitle);
      else reject(new Error("subtitle runtime unavailable"));
    };
    script.onerror = () => reject(new Error("subtitle runtime failed"));
    document.head.appendChild(script);
  });
}

function getRuntime(): Promise<SubtitleRuntime> {
  if (runtime) return Promise.resolve(runtime);
  if (runtimePromise) return runtimePromise;

  if (!isIifeBuild) {
    runtimePromise = import("../subtitle-runtime").then((module) => ({
      convert: module.convertSubtitleRuntime,
      pinyinParts: module.convertPinyinPartsRuntime
    }));
  } else {
    const script =
      (document.currentScript as HTMLScriptElement | null) ??
      document.querySelector<HTMLScriptElement>("script[src*='aging-assist.iife.js']");
    const source = script?.src || "";
    const url = source
      ? source.replace(/aging-assist\.iife\.js(?:\?.*)?$/, "aging-assist-subtitle.iife.js")
      : "aging-assist-subtitle.iife.js";
    runtimePromise = loadScript(url);
  }

  return runtimePromise.then((loaded) => {
    runtime = loaded;
    return loaded;
  });
}

export async function convertSubtitle(text: string, mode: SubtitleMode): Promise<string> {
  return (await getRuntime()).convert(text, mode);
}

export async function convertSubtitlePinyinParts(text: string): Promise<PinyinPart[]> {
  return (await getRuntime()).pinyinParts(text);
}
