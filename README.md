# Aging Assist - Vue 3 适老化无障碍插件

中文名：适老化助手，也可作为网站适老化插件、无障碍辅助插件、老年人友好访问组件使用。

面向中文网站的适老化插件、无障碍辅助工具和老年人友好访问组件。

一套基于 Vue 3 开发、但接入方无需使用 Vue 的网站适老化插件。它面向政务、医院、社区服务、传统 CMS 和存量业务系统，优先支持 `<script>` 直接引入，同时提供 npm / ESM 入口。

## 能力清单

- 一键开启、收起、重置、退出服务
- 文字放大 / 缩小，页面整体缩放
- 配色切换、大鼠标、十字线
- 配色与参考无障碍工具保持一致：白底黑字蓝链接、蓝底黄字白链接、黄底黑字蓝链接、黑底黄字白链接，以及页面原始配色；旧版 `highContrast` 调用仍可用，会按顺序循环切换
- 鼠标、触屏和键盘焦点指读，大字幕、简繁体 / 拼音显示、语音朗读、语速切换
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

Script 接入需要同时部署 `dist/aging-assist.iife.js`、`dist/aging-assist-subtitle.iife.js` 和 `dist/style.css` 到同一目录。简体字幕默认不加载转换资源；用户切换繁体或拼音时，插件会按需加载 `aging-assist-subtitle.iife.js`。

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

同一页面只维护一个活动实例。重复调用 `createAgingAssist()` / `init()` 会返回现有实例；如需重新配置，请先调用 `assist.destroy()`。

大字幕开启后可在字幕窗口选择简体、繁体或拼音。显示模式会记住，语音朗读始终使用页面原文，不会朗读转换后的拼音。

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

assist.setState({ contrastMode: "black-yellow-white", mistakeGuard: true });
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
| `locale` | `zh-CN | en-US` | `zh-CN` | 工具条文案和朗读语言。 |
| `theme` | `warm | official | dark` | `warm` | 内置暖色、政务和深色主题。 |
| `position` | `top | bottom` | `top` | 工具条位置。 |
| `autoMount` | `boolean` | `true` | 是否在创建后自动挂载。页面尚未就绪时会等待 DOM。 |
| `showLauncher` | `boolean` | `true` | 是否显示内置悬浮入口。 |
| `dangerousSelector` | `string` | see source | 需要防误触保护的元素。 |
| `ignoredSelector` | `string` | see source | 指读、朗读、大字幕忽略区域。 |
| `labels` | `Partial<AssistLabels>` | 中文文案 | 覆盖 UI 文案。 |
| `onChange` | `(state) => void` | `undefined` | 状态变化回调。 |
| `onEvent` | `(event) => void` | `undefined` | 生命周期和操作事件。 |

传入 `setState()` 和本地存储的状态会在运行时校验。缩放、语速、进度和字段类型不合法时不会破坏页面；`subscribeKey()` 只在指定字段真正变化时通知。

## 无障碍行为

- 工具条打开时会按实际高度为业务页面预留空间，顶部和底部模式都不会覆盖正文。
- 状态按钮提供 `aria-pressed`，更多设置提供展开关系，状态消息使用实时区域。
- 指读、大字幕和朗读同时响应鼠标悬停、键盘焦点、触摸和手写笔。
- 防误触确认框具备标题和说明关联、初始焦点、Tab 焦点循环、Escape 取消和焦点归还。
- 页面缩放后工具条保持原始可操作尺寸；大字幕开启时仍允许点击底层业务页面。

这些能力不能替代业务页面本身的语义 HTML、键盘可达性和 WCAG 测试。接入方仍应保留正确的标题层级、表单标签、替代文本与错误提示。

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
npm run test:run
npm run test:coverage
npm run build
npm run audit:prod
npm run check
```

Vite demo 会展示 script 场景、表单场景、标注规则、防误触确认和状态订阅。

构建后也可以直接打开 `examples/script.html`，验证老网站 script-only 接入方式。

`npm run check` 是合并和发布前的统一门槛；仓库中的 GitHub Actions 会在推送和拉取请求上执行类型检查、测试、覆盖率、构建和生产依赖安全审计。

## 浏览器范围

支持当前维护版本的 Chrome、Edge、Firefox 和 Safari。语音朗读依赖浏览器 `SpeechSynthesis` 与本机可用语音；不支持时会显示明确状态，不影响其他功能。构建目标为 ES2020，不支持 Internet Explorer。

## License

MIT。图标来自 `lucide-vue-next`，它使用宽松开源许可。
