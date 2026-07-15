# 适老化插件产品说明

## 产品定位

Aging Assist 是一套可被业务网站直接接入的适老化前端 SDK。它面向政务、公共服务、医院、社区服务、企业官网和老旧 CMS，核心目标是低接入成本、功能可见、交互稳定、后续可维护。

接入方不需要使用 Vue。插件内部使用 Vue 3 构建工具条 UI，对外提供 IIFE 和 ESM 两类入口。

## 接入策略

1. Script 优先：适合传统页面，只需引入 `dist/style.css` 和 `dist/aging-assist.iife.js`。
2. npm / ESM 其次：适合现代工程，通过 `createAgingAssist()` 创建实例。
3. 页面标注轻量化：优先读取原生语义、`alt`、`title`、`aria-label`，必要时使用 `data-aging-text`。
4. 功能状态可订阅：接入方可通过 `onChange`、`onEvent`、`subscribe()`、`subscribeKey()` 做统计或业务联动。

## 核心能力

- 启停控制：打开、收起、重置、退出服务。
- 视觉增强：文字缩放、页面缩放、高对比、简洁模式。
- 定位辅助：大鼠标、十字线、焦点增强、点击区域增强。
- 阅读辅助：鼠标、触屏和键盘焦点指读，高亮、大字幕、上一段/下一段。
- 语音辅助：浏览器 SpeechSynthesis 朗读、暂停、继续、语速切换。
- 表单辅助：增强 label、input、select、textarea 的可读性和触控尺寸。
- 防误触：危险按钮和危险表单提交先弹二次确认。
- 偏好记忆：localStorage 保存用户偏好，退出服务会清理。

## 标注约定

| 场景 | 推荐标注 | 说明 |
| --- | --- | --- |
| 图片含义 | `alt` | 用于朗读和大字幕。 |
| 非语义按钮 | `role="button"` + `title` | 帮助插件识别真实动作。 |
| 显式朗读文本 | `data-aging-text` | 当页面显示文字不等于朗读文字时使用。 |
| 危险操作 | `data-aging-danger` | 开启防误触后先确认。 |
| 忽略区域 | `data-aging-ignore` | 广告、统计、装饰模块不参与阅读。 |

兼容旧参考项目的部分习惯：`.qunar-assist-long-text` 会参与大段阅读，`.qunar-assist-hide` 默认忽略，`.danger` / `.delete` 默认受防误触保护。

## 视觉原则

工具条是工作型界面，不是营销页。设计重点是：

- 按钮足够大，图标和文字同时出现。
- 状态明显，开启项要能一眼看出。
- 色彩稳重，适合公共服务场景。
- 面板不遮挡业务主流程，大字幕面板本体不拦截页面点击。
- 移动端可横向滚动工具按钮，不压缩到难以点击。
- 确认弹窗限制键盘焦点，支持 Escape 取消，并在关闭后归还焦点。

## 技术架构

- `src/sdk/index.ts`：对外入口，暴露 `createAgingAssist` 和 `window.AgingAssist`。
- `src/sdk/AgingAssist.ts`：核心控制器，负责状态、副作用、朗读、事件、持久化和危险操作确认。
- `src/sdk/components/AssistPanel.vue`：Vue 3 工具条 UI。
- `src/sdk/styles/effects.css`：对业务页面生效的适老化效果。
- `src/sdk/styles/panel.css`：插件自身 UI 样式。
- `src/demo/`：本地示例页面，覆盖表单、表格、语义标注、防误触和状态订阅。

## 验收标准

- `npm run typecheck` 通过。
- `npm run test:coverage` 通过既定覆盖率门槛。
- `npm run build` 产出 `dist/aging-assist.es.js`、`dist/aging-assist.iife.js`、`dist/style.css` 和 `dist/types/index.d.ts`。
- script 页面可通过 `window.AgingAssist.init()` 创建实例。
- npm 页面可通过 `createAgingAssist()` 创建实例。
- 打开工具条后，文字缩放、高对比、大字幕、指读、十字线、表单增强和防误触可独立切换。
- 开启防误触后，点击 `[data-aging-danger]` 元素会出现确认框；取消不继续，继续只放行本次操作。
- 大字幕打开时不阻塞页面底层按钮点击。
- 工具条在桌面和移动端按实际高度为页面让位，不覆盖首屏或末尾内容。
- 鼠标、键盘焦点、触摸和手写笔均能更新指读、大字幕与朗读目标。
- 状态开关暴露正确的辅助技术状态，确认弹窗具备完整键盘焦点闭环。
- 页面刷新后，持久化功能状态能恢复；退出服务会清理偏好。
- 生产依赖安全审计无高危漏洞，`npm pack --dry-run` 仅包含声明的发布文件。

## 后续扩展

- 多语言：扩展 `AssistLabels`。
- 品牌主题：增加主题 token，不改组件结构。
- 统计埋点：使用 `onEvent` 监听 `open`、`change`、`speak`、`confirm`。
- 业务风险控制：通过 `dangerousSelector` 扩大危险操作范围。
