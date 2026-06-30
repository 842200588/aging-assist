import type { AssistLabels, AssistState } from "./types";

export const DEFAULT_NAMESPACE = "aging-assist";
export const DEFAULT_STORAGE_KEY = "aging-assist-state";

export const defaultState: AssistState = {
  enabled: false,
  toolbarOpen: false,
  moreOpen: false,
  confirming: false,
  fontScale: 1,
  pageScale: 1,
  highContrast: false,
  simplified: false,
  largeCursor: false,
  crosshair: false,
  readingGuide: false,
  bigText: false,
  speech: false,
  speechPaused: false,
  speechProgress: 0,
  speechRate: 1,
  statusMessage: "",
  focusEnhance: true,
  clickEnhance: false,
  formEnhance: true,
  mistakeGuard: false,
  currentText: "",
  readingIndex: -1
};

export const labelsZhCn: AssistLabels = {
  launcher: "适老化",
  openToolbar: "打开适老化工具",
  closeToolbar: "收起工具条",
  enable: "开启服务",
  exit: "退出服务",
  reset: "重置",
  fontUp: "文字放大",
  fontDown: "文字缩小",
  pageZoomIn: "页面放大",
  pageZoomOut: "页面缩小",
  highContrast: "高对比",
  simplified: "简洁模式",
  largeCursor: "大鼠标",
  crosshair: "十字线",
  readingGuide: "指读",
  bigText: "大字幕",
  closeBigText: "关闭大字幕",
  speech: "语音朗读",
  speechRate: "语速",
  focusEnhance: "焦点增强",
  clickEnhance: "点击增强",
  formEnhance: "表单辅助",
  mistakeGuard: "防误触",
  readPrevious: "上一段",
  readNext: "下一段",
  pauseSpeech: "暂停朗读",
  continueSpeech: "继续朗读",
  more: "更多"
};
