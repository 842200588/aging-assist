<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import {
  ALargeSmall,
  AudioLines,
  BadgeCheck,
  Baseline,
  CircleOff,
  Contrast,
  Crosshair,
  Eye,
  Focus,
  Hand,
  ListRestart,
  Maximize2,
  Minimize2,
  MousePointer2,
  MousePointerClick,
  Pause,
  Play,
  Rows3,
  ScanEye,
  ShieldAlert,
  Sparkles,
  Type,
  Volume2,
  X,
  Zap
} from "lucide-vue-next";
import type { AssistLabels, AssistState, SpeechRate } from "../types";

const props = defineProps<{
  state: AssistState;
  labels: AssistLabels;
  position: "top" | "bottom";
  showLauncher: boolean;
}>();

const emit = defineEmits<{
  action: [name: string, value?: unknown];
}>();

const rates: Array<{ label: string; value: SpeechRate }> = [
  { label: "慢速", value: 0.75 },
  { label: "标准", value: 1 },
  { label: "较快", value: 1.25 },
  { label: "快速", value: 1.5 }
];

const bigTextScroller = ref<HTMLElement | null>(null);
const scrollProgress = ref(0);
const scrollTargetTop = ref(0);
const scrollAnimationFrame = ref(0);
const plainScrollProgress = ref(0);
const plainScrollTimer = ref(0);
const plainScrollMonitorTimer = ref(0);
const plainScrollSignature = ref("");
const plainScrollStartedAt = ref(0);
const plainScrollDuration = ref(0);
const maxPlainScrollStartAttempts = 8;

type TextLineMetric = {
  start: number;
  end: number;
  top: number;
};

const bigTextContent = computed(
  () => props.state.currentText || "移动鼠标到文字上，这里会显示大字幕。"
);
const shouldFollowSpeechScroll = computed(
  () => props.state.bigText && props.state.speech && !props.state.speechPaused
);
const subtitleChars = computed(() => Array.from(bigTextContent.value));

function action(name: string, value?: unknown) {
  emit("action", name, value);
}

function setBoolean(key: string, event: Event) {
  action("setBoolean", {
    key,
    value: (event.target as HTMLInputElement).checked
  });
}

function stopBigTextScroll() {
  if (!scrollAnimationFrame.value) return;
  window.cancelAnimationFrame(scrollAnimationFrame.value);
  scrollAnimationFrame.value = 0;
}

function stopPlainAutoScroll() {
  if (plainScrollTimer.value) {
    window.clearTimeout(plainScrollTimer.value);
  }
  plainScrollTimer.value = 0;
  plainScrollSignature.value = "";
  plainScrollStartedAt.value = 0;
  plainScrollDuration.value = 0;
}

function clampProgress(value: number) {
  return Math.min(1, Math.max(0, value));
}

function updateScrollProgress(element: HTMLElement) {
  const maxScroll = element.scrollHeight - element.clientHeight;
  scrollProgress.value = maxScroll > 0 ? Math.min(100, (element.scrollTop / maxScroll) * 100) : 0;
}

function measureTextLines(element: HTMLElement) {
  const chars = Array.from(element.querySelectorAll<HTMLElement>(".aging-assist-subtitle-char"));
  const lines: TextLineMetric[] = [];
  if (chars.length <= 1) {
    return { charsLength: chars.length, lines };
  }

  const firstTop = chars[0]?.offsetTop ?? 0;
  let lineStart = 0;
  let lineTop = firstTop;

  chars.forEach((char, index) => {
    if (char.offsetTop <= lineTop + 2) return;
    lines.push({ start: lineStart, end: index, top: lineTop });
    lineStart = index;
    lineTop = char.offsetTop;
  });
  lines.push({ start: lineStart, end: chars.length, top: lineTop });

  return { charsLength: chars.length, lines };
}

function easeScrollProgress(progress: number) {
  const value = clampProgress(progress);
  return value * value * (3 - 2 * value);
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

function getScrollProgress() {
  return props.state.speech ? props.state.speechProgress : plainScrollProgress.value;
}

function getBigTextScrollTarget(element: HTMLElement, maxScroll: number) {
  if (!props.state.bigText) return 0;

  const { charsLength, lines } = measureTextLines(element);
  if (charsLength <= 1 || lines.length <= 1) return 0;

  const readProgress = clampProgress(getScrollProgress());
  if (readProgress >= 1) return maxScroll;

  const readIndex = readProgress * charsLength;
  const currentLineIndex = lines.findIndex((line) => readIndex < line.end);
  if (currentLineIndex <= 0) return 0;

  const currentLine = lines[currentLineIndex];
  const previousLine = lines[currentLineIndex - 1];
  const firstLineTop = lines[0].top;
  const lineSpan = Math.max(1, currentLine.end - currentLine.start);
  const lineProgress = easeScrollProgress((readIndex - currentLine.start) / lineSpan);
  const fromTop = Math.max(0, previousLine.top - firstLineTop);
  const toTop = Math.max(0, currentLine.top - firstLineTop);

  return Math.min(maxScroll, fromTop + (toTop - fromTop) * lineProgress);
}

function animateBigTextScroll() {
  const element = bigTextScroller.value;
  if (!element) {
    scrollAnimationFrame.value = 0;
    return;
  }

  const delta = scrollTargetTop.value - element.scrollTop;
  if (Math.abs(delta) < 0.5) {
    element.scrollTop = scrollTargetTop.value;
    updateScrollProgress(element);
    scrollAnimationFrame.value = 0;
    return;
  }

  element.scrollTop += delta * 0.22;
  updateScrollProgress(element);
  scrollAnimationFrame.value = window.requestAnimationFrame(animateBigTextScroll);
}

function setBigTextScrollTop(element: HTMLElement, targetTop: number, immediate = false) {
  scrollTargetTop.value = targetTop;
  if (immediate || prefersReducedMotion()) {
    stopBigTextScroll();
    element.scrollTop = targetTop;
    updateScrollProgress(element);
    return;
  }
  if (!scrollAnimationFrame.value) {
    scrollAnimationFrame.value = window.requestAnimationFrame(animateBigTextScroll);
  }
}

function syncBigTextScroll(immediate = false) {
  const element = bigTextScroller.value;
  if (!element) return;
  const maxScroll = element.scrollHeight - element.clientHeight;
  if (maxScroll <= 0) {
    scrollProgress.value = 0;
    return;
  }
  setBigTextScrollTop(element, getBigTextScrollTarget(element, maxScroll), immediate);
}

function estimatePlainScrollDuration(text: string) {
  const compactLength = Math.max(text.replace(/\s+/g, "").length, 8);
  return Math.max(4200, compactLength * 120);
}

function getPlainScrollSignature(element: HTMLElement) {
  return `${bigTextContent.value}|${element.scrollHeight}|${element.clientHeight}`;
}

function preparePlainAutoScroll(element: HTMLElement, fromCurrent = false) {
  plainScrollSignature.value = getPlainScrollSignature(element);
  plainScrollDuration.value = estimatePlainScrollDuration(bigTextContent.value);
  const maxScroll = element.scrollHeight - element.clientHeight;
  plainScrollProgress.value =
    fromCurrent && maxScroll > 0 ? clampProgress(element.scrollTop / maxScroll) : 0;
  plainScrollStartedAt.value =
    window.performance.now() - plainScrollProgress.value * plainScrollDuration.value;
}

function advancePlainAutoScroll() {
  const element = bigTextScroller.value;
  if (!element || !props.state.bigText || props.state.speech || prefersReducedMotion()) {
    plainScrollSignature.value = "";
    plainScrollStartedAt.value = 0;
    plainScrollDuration.value = 0;
    return;
  }

  if (element.scrollHeight <= element.clientHeight) {
    plainScrollSignature.value = "";
    plainScrollStartedAt.value = 0;
    plainScrollDuration.value = 0;
    updateScrollProgress(element);
    return;
  }

  const signature = getPlainScrollSignature(element);
  if (signature !== plainScrollSignature.value || !plainScrollDuration.value) {
    preparePlainAutoScroll(element);
  }

  const startedAt = plainScrollStartedAt.value || window.performance.now();
  plainScrollStartedAt.value = startedAt;
  plainScrollProgress.value = clampProgress(
    (window.performance.now() - startedAt) / plainScrollDuration.value
  );
  syncBigTextScroll(true);
}

function startPlainAutoScroll(fromCurrent = false, attempt = 0) {
  if (attempt === 0) stopPlainAutoScroll();
  if (!props.state.bigText || props.state.speech || prefersReducedMotion()) return;

  nextTick(() => {
    const element = bigTextScroller.value;
    if (!element) return;
    if (element.scrollHeight <= element.clientHeight) {
      if (attempt < maxPlainScrollStartAttempts) {
        plainScrollTimer.value = window.setTimeout(() => {
          plainScrollTimer.value = 0;
          startPlainAutoScroll(fromCurrent, attempt + 1);
        }, 120);
      }
      return;
    }
    preparePlainAutoScroll(element, fromCurrent);
    advancePlainAutoScroll();
  });
}

function startPlainAutoScrollMonitor() {
  if (plainScrollMonitorTimer.value) return;

  const tick = () => {
    plainScrollMonitorTimer.value = 0;
    advancePlainAutoScroll();
    plainScrollMonitorTimer.value = window.setTimeout(tick, 64);
  };

  plainScrollMonitorTimer.value = window.setTimeout(tick, 64);
}

function stopPlainAutoScrollMonitor() {
  if (!plainScrollMonitorTimer.value) return;
  window.clearTimeout(plainScrollMonitorTimer.value);
  plainScrollMonitorTimer.value = 0;
}

function resetBigTextScroll() {
  nextTick(() => {
    const element = bigTextScroller.value;
    if (!element) return;
    setBigTextScrollTop(element, 0, true);
    if (shouldFollowSpeechScroll.value) syncBigTextScroll();
    startPlainAutoScroll();
  });
}

watch(bigTextContent, resetBigTextScroll);
watch(
  () => props.state.bigText,
  (active) => {
    if (active) resetBigTextScroll();
    else {
      stopBigTextScroll();
      stopPlainAutoScroll();
    }
  }
);
watch(shouldFollowSpeechScroll, (active) => {
  if (active) {
    stopPlainAutoScroll();
    nextTick(syncBigTextScroll);
  } else {
    stopBigTextScroll();
    if (!props.state.speech) startPlainAutoScroll(true);
  }
});
watch(
  () => props.state.speech,
  (active) => {
    if (active) {
      stopPlainAutoScroll();
      nextTick(syncBigTextScroll);
    } else {
      startPlainAutoScroll(true);
    }
  }
);
watch(
  () => props.state.speechRate,
  () => {
    if (shouldFollowSpeechScroll.value) nextTick(syncBigTextScroll);
  }
);
watch(
  () => props.state.speechProgress,
  () => {
    if (!props.state.bigText || !props.state.speech) return;
    nextTick(() => {
      syncBigTextScroll();
    });
  }
);

onMounted(startPlainAutoScrollMonitor);

onBeforeUnmount(() => {
  stopPlainAutoScrollMonitor();
  stopBigTextScroll();
  stopPlainAutoScroll();
});
</script>

<template>
  <div class="aging-assist-root" data-aging-assist-root>
    <button
      v-if="showLauncher && !state.toolbarOpen"
      class="aging-assist-launcher"
      type="button"
      :aria-label="labels.openToolbar"
      @click="action('open')"
    >
      <BadgeCheck :size="24" />
      <span>{{ labels.launcher }}</span>
    </button>

    <section
      v-if="state.toolbarOpen"
      class="aging-assist-toolbar"
      :class="position === 'bottom' ? 'is-bottom' : 'is-top'"
      :aria-label="labels.launcher"
    >
      <div class="aging-assist-shell">
        <div class="aging-assist-brand">
          <div class="aging-assist-mark" aria-hidden="true">
            <Sparkles :size="26" />
          </div>
          <div class="aging-assist-title">
            <strong>{{ labels.launcher }}</strong>
            <span>更清楚，更好点，更安心</span>
          </div>
        </div>

        <div class="aging-assist-groups">
          <div class="aging-assist-group">
            <button class="aging-assist-control" type="button" @click="action('reset')">
              <ListRestart />
              <span>{{ labels.reset }}</span>
            </button>
            <button
              class="aging-assist-control"
              type="button"
              :class="{ 'is-active': state.speech }"
              @click="action('toggle', 'speech')"
            >
              <Volume2 />
              <span>{{ labels.speech }}</span>
            </button>
            <button
              v-if="state.speech && !state.speechPaused"
              class="aging-assist-control"
              type="button"
              @click="action('pauseSpeech')"
            >
              <Pause />
              <span>{{ labels.pauseSpeech }}</span>
            </button>
            <button
              v-if="state.speech && state.speechPaused"
              class="aging-assist-control"
              type="button"
              @click="action('resumeSpeech')"
            >
              <Play />
              <span>{{ labels.continueSpeech }}</span>
            </button>
            <button class="aging-assist-control" type="button" @click="action('readPrevious')">
              <AudioLines />
              <span>{{ labels.readPrevious }}</span>
            </button>
            <button class="aging-assist-control" type="button" @click="action('readNext')">
              <Rows3 />
              <span>{{ labels.readNext }}</span>
            </button>
          </div>

          <div class="aging-assist-group">
            <button class="aging-assist-control" type="button" @click="action('fontDown')">
              <Baseline />
              <span>{{ labels.fontDown }}</span>
            </button>
            <button class="aging-assist-control" type="button" @click="action('fontUp')">
              <Type />
              <span>{{ labels.fontUp }}</span>
            </button>
            <button class="aging-assist-control" type="button" @click="action('zoomOut')">
              <Minimize2 />
              <span>{{ labels.pageZoomOut }}</span>
            </button>
            <button class="aging-assist-control" type="button" @click="action('zoomIn')">
              <Maximize2 />
              <span>{{ labels.pageZoomIn }}</span>
            </button>
          </div>

          <div class="aging-assist-group">
            <button
              class="aging-assist-control"
              type="button"
              :class="{ 'is-active': state.highContrast }"
              @click="action('toggle', 'highContrast')"
            >
              <Contrast />
              <span>{{ labels.highContrast }}</span>
            </button>
            <button
              class="aging-assist-control"
              type="button"
              :class="{ 'is-active': state.largeCursor }"
              @click="action('toggle', 'largeCursor')"
            >
              <MousePointer2 />
              <span>{{ labels.largeCursor }}</span>
            </button>
            <button
              class="aging-assist-control"
              type="button"
              :class="{ 'is-active': state.crosshair }"
              @click="action('toggle', 'crosshair')"
            >
              <Crosshair />
              <span>{{ labels.crosshair }}</span>
            </button>
            <button
              class="aging-assist-control"
              type="button"
              :class="{ 'is-active': state.readingGuide }"
              @click="action('toggle', 'readingGuide')"
            >
              <ScanEye />
              <span>{{ labels.readingGuide }}</span>
            </button>
            <button
              class="aging-assist-control"
              type="button"
              :class="{ 'is-active': state.bigText }"
              @click="action('toggle', 'bigText')"
            >
              <ALargeSmall />
              <span>{{ labels.bigText }}</span>
            </button>
          </div>

          <div class="aging-assist-group">
            <button
              class="aging-assist-control"
              type="button"
              :class="{ 'is-active': state.simplified }"
              @click="action('toggle', 'simplified')"
            >
              <Eye />
              <span>{{ labels.simplified }}</span>
            </button>
            <button
              class="aging-assist-control"
              type="button"
              :class="{ 'is-active': state.moreOpen }"
              @click="action('toggleMore')"
            >
              <Zap />
              <span>{{ labels.more }}</span>
            </button>
          </div>
        </div>

        <div class="aging-assist-status">
          <div class="aging-assist-rate">
            <label for="aging-assist-rate">{{ labels.speechRate }}</label>
            <select
              id="aging-assist-rate"
              :value="state.speechRate"
              @change="action('rate', Number(($event.target as HTMLSelectElement).value))"
            >
              <option v-for="rate in rates" :key="rate.value" :value="rate.value">
                {{ rate.label }}
              </option>
            </select>
          </div>
          <p v-if="state.statusMessage" class="aging-assist-message" role="status">
            {{ state.statusMessage }}
          </p>
          <button
            class="aging-assist-control is-danger"
            type="button"
            @click="action('disable')"
          >
            <CircleOff />
            <span>{{ labels.exit }}</span>
          </button>
          <button
            class="aging-assist-control"
            type="button"
            :aria-label="labels.closeToolbar"
            @click="action('close')"
          >
            <X />
            <span>{{ labels.closeToolbar }}</span>
          </button>
        </div>
      </div>
    </section>

    <aside v-if="state.toolbarOpen && state.moreOpen" class="aging-assist-more">
      <h2>增强设置</h2>
      <div class="aging-assist-switches">
        <label class="aging-assist-switch">
          <span><Focus :size="20" /> {{ labels.focusEnhance }}</span>
          <input
            type="checkbox"
            :checked="state.focusEnhance"
            @change="setBoolean('focusEnhance', $event)"
          />
        </label>
        <label class="aging-assist-switch">
          <span><MousePointerClick :size="20" /> {{ labels.clickEnhance }}</span>
          <input
            type="checkbox"
            :checked="state.clickEnhance"
            @change="setBoolean('clickEnhance', $event)"
          />
        </label>
        <label class="aging-assist-switch">
          <span><Hand :size="20" /> {{ labels.formEnhance }}</span>
          <input
            type="checkbox"
            :checked="state.formEnhance"
            @change="setBoolean('formEnhance', $event)"
          />
        </label>
        <label class="aging-assist-switch">
          <span><ShieldAlert :size="20" /> {{ labels.mistakeGuard }}</span>
          <input
            type="checkbox"
            :checked="state.mistakeGuard"
            @change="setBoolean('mistakeGuard', $event)"
          />
        </label>
      </div>
    </aside>

    <section
      v-if="state.bigText"
      class="aging-assist-bigtext is-bottom"
      :class="[
        position === 'top' ? 'has-toolbar-top' : 'has-toolbar-bottom',
        state.speech ? 'is-reading' : 'is-plain'
      ]"
      aria-live="polite"
    >
      <div class="aging-assist-bigtext-window">
        <p ref="bigTextScroller" @scroll="updateScrollProgress($event.currentTarget as HTMLElement)">
          <span
            v-for="(char, index) in subtitleChars"
            :key="`${index}-${char}`"
            class="aging-assist-subtitle-char"
          >
            {{ char }}
          </span>
        </p>
        <span
          class="aging-assist-bigtext-progress"
          :style="{ transform: `scaleX(${scrollProgress / 100})` }"
          aria-hidden="true"
        ></span>
      </div>
      <div class="aging-assist-bigtext-actions">
        <button
          type="button"
          :aria-label="labels.closeBigText"
          :title="labels.closeBigText"
          @click="action('toggle', 'bigText')"
        >
          <X :size="28" />
        </button>
      </div>
    </section>

    <div
      class="aging-assist-crosshair-x"
      :class="{ 'is-visible': state.crosshair }"
      aria-hidden="true"
    ></div>
    <div
      class="aging-assist-crosshair-y"
      :class="{ 'is-visible': state.crosshair }"
      aria-hidden="true"
    ></div>

    <section v-if="state.confirming" class="aging-assist-confirm" role="dialog" aria-modal="true">
      <div class="aging-assist-confirm-box">
        <h2>请确认操作</h2>
        <p>这个操作可能会提交、删除或改变重要信息。请确认是否继续。</p>
        <div class="aging-assist-confirm-actions">
          <button type="button" @click="action('cancelDanger')">取消</button>
          <button
            class="primary"
            type="button"
            data-aging-confirm-primary
            @click="action('confirmDanger')"
          >
            继续
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
