import { describe, expect, it, vi } from "vitest";
import { SpeechController } from "./speech";

describe("SpeechController", () => {
  it("uses the configured locale and reports progress", () => {
    const controller = new SpeechController();
    const onStart = vi.fn();
    const onBoundary = vi.fn();
    const onEnd = vi.fn();
    const started = controller.speak("welcome service", 1.25, "en-US", {
      onStart,
      onBoundary,
      onEnd
    });
    expect(started).toBe(true);
    const utterance = vi.mocked(window.speechSynthesis.speak).mock.calls[0]?.[0];
    expect(utterance?.lang).toBe("en-US");
    expect(utterance?.rate).toBe(1.25);
    expect(onStart).toHaveBeenCalledOnce();

    utterance?.onboundary?.({ charIndex: 7 } as SpeechSynthesisEvent);
    expect(onBoundary).toHaveBeenCalledWith(7 / "welcome service".length);
    utterance?.onend?.({} as SpeechSynthesisEvent);
    expect(onEnd).toHaveBeenCalledOnce();
  });

  it("supports pause, resume and stop", () => {
    const controller = new SpeechController();
    controller.speak("适老化服务", 1, "zh-CN");
    controller.pause();
    controller.resume();
    controller.stop();
    expect(window.speechSynthesis.pause).toHaveBeenCalledOnce();
    expect(window.speechSynthesis.resume).toHaveBeenCalledOnce();
    expect(window.speechSynthesis.cancel).toHaveBeenCalled();
  });

  it("does not start empty text", () => {
    expect(new SpeechController().speak("", 1, "zh-CN")).toBe(false);
  });
});
