# Aging Assist

一套基于 Vue 3 开发、但接入方无需使用 Vue 的网站适老化插件。它面向政务、医院、社区服务、传统 CMS 和存量业务系统，优先支持 `<script>` 直接引入，同时提供 npm / ESM 入口。

## 能力清单

- 一键开启、收起、重置、退出服务
- 文字放大 / 缩小，页面整体缩放
- 高对比、简洁模式、大鼠标、十字线
- 指读高亮、大字幕、语音朗读、语速切换
- 上一段 / 下一段阅读队列
- 焦点增强、点击目标增强、表单辅助
- 危险操作防误触二次确认
- 本地记忆用户偏好
- 实例 API、状态订阅、事件回调

## Script 接入

适合老网站、CMS、静态页和任意非 Vue 项目。

```html
<button id="assist-open" type="button">打开适老化</button>

<link rel="stylesheet" href="/dist/style.css" />
<script src="/dist/aging-assist.iife.js"></script>
<script>
  const assist = window.AgingAssist.init({
    trigger: "#assist-open",
    position: "top",
    dangerousSelector: "[data-aging-danger], .danger, .delete"
  });

  assist.subscribeKey("enabled", function (enabled) {
    console.log("适老化状态：", enabled ? "已开启" : "未开启");
  });
</script>
```

内置悬浮入口默认开启。如果页面已经有自己的按钮，可以继续保留 `showLauncher: true`；如果只想用业务自己的入口，设为 `showLauncher: false`。

## NPM / ESM 接入

```bash
npm install aging-assist
```

```ts
import "aging-assist/dist/style.css";
import { createAgingAssist } from "aging-assist";

const assist = createAgingAssist({
  trigger: "#assist-open",
  initialState: {
    focusEnhance: true,
    formEnhance: true
  },
  onChange(state) {
    console.log(state.enabled);
  }
});
```

## API

```ts
assist.open();
assist.close();
assist.enable();
assist.disable();
assist.reset();

assist.toggle("highContrast");
assist.speak("欢迎使用适老化服务");
assist.pauseSpeech();
assist.resumeSpeech();

assist.setState({ highContrast: true, mistakeGuard: true });
const state = assist.getState();

const stopAll = assist.subscribe((nextState) => {
  console.log(nextState);
});

const stopZoom = assist.subscribeKey("pageScale", (value, nextState) => {
  console.log(value, nextState.enabled);
});
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `trigger` | `string | HTMLElement` | `null` | 外部打开按钮。 |
| `container` | `string | HTMLElement` | `document.body` | 插件 UI 挂载容器。 |
| `namespace` | `string` | `aging-assist` | DOM 命名空间。 |
| `storageKey` | `string` | `aging-assist-state` | 本地存储 key。 |
| `persist` | `boolean` | `true` | 是否记忆用户偏好。 |
| `initialState` | `Partial<AssistState>` | `{}` | 初始功能状态。 |
| `position` | `top | bottom` | `top` | 工具条位置。 |
| `showLauncher` | `boolean` | `true` | 是否显示内置悬浮入口。 |
| `dangerousSelector` | `string` | see source | 需要防误触保护的元素。 |
| `ignoredSelector` | `string` | see source | 指读、朗读、大字幕忽略区域。 |
| `labels` | `Partial<AssistLabels>` | 中文文案 | 覆盖 UI 文案。 |
| `onChange` | `(state) => void` | `undefined` | 状态变化回调。 |
| `onEvent` | `(event) => void` | `undefined` | 生命周期和操作事件。 |

## 页面标注规范

优先使用语义 HTML。插件会读取 `aria-label`、`title`、`alt`、表单 placeholder、文本内容，也支持显式标注。

```html
<img alt="社区服务中心大厅" src="hall.jpg" />
<button title="提交申请">提交</button>
<div role="button" title="在线咨询">在线咨询</div>
<span data-aging-text="医保窗口协助办理">窗口服务</span>
```

危险操作加 `data-aging-danger`，开启防误触后会先弹确认框：

```html
<button data-aging-danger="true">删除记录</button>
```

不希望被朗读或指读的区域加 `data-aging-ignore`：

```html
<div data-aging-ignore>广告、埋点状态、装饰模块</div>
```

兼容旧版参考项目中的部分习惯：

- `.qunar-assist-long-text` 会被纳入大段文本阅读对象
- `.qunar-assist-hide` 默认作为忽略区域
- `.danger`、`.delete` 默认会被防误触保护

## 本地开发

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

Vite demo 会展示 script 场景、表单场景、标注规则、防误触确认和状态订阅。

构建后也可以直接打开 `examples/script.html`，验证老网站 script-only 接入方式。

## License

MIT。图标来自 `lucide-vue-next`，它使用宽松开源许可。
