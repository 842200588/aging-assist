import { createApp, defineComponent, h, onMounted, ref } from "vue";
import { createAgingAssist } from "../sdk";
import type { AssistState } from "../sdk";

const DemoApp = defineComponent({
  setup() {
    const status = ref("未开启");
    const lastAction = ref("等待操作");
    const mode = ref("标准模式");

    const syncAssistStatus = (state: AssistState) => {
      status.value = state.enabled ? "已开启" : "未开启";
      mode.value = state.highContrast ? "高对比模式" : state.bigText ? "大字幕模式" : "标准模式";
    };

    onMounted(() => {
      const assist = createAgingAssist({
        trigger: "#assist-open",
        position: "top",
        persist: true,
        showLauncher: true,
        dangerousSelector:
          "[data-aging-danger], .danger, .delete, .dangerous, [type='submit'][data-danger='true']",
        onChange: syncAssistStatus,
        onEvent(event) {
          if (event.type === "confirm") lastAction.value = "已确认危险操作";
        }
      });
      window.__agingAssist = assist;
      syncAssistStatus(assist.getState());
      assist.subscribeKey("pageScale", (value) => {
        lastAction.value = `页面缩放 ${Math.round(value * 100)}%`;
      });
    });

    return () =>
      h("div", { class: "demo-page" }, [
        h("header", { class: "hero" }, [
          h("div", { class: "hero-copy" }, [
            h("p", { class: "eyebrow" }, "Vue3 SDK / 适老化插件"),
            h("h1", "一套能直接接入网站的适老化工具条"),
            h(
              "p",
              { class: "lead" },
              "面向政务、医院、社区服务和传统 CMS 页面，提供大字、高对比、朗读、指读、十字线、鼠标增强、表单辅助和防误触确认。"
            ),
            h("div", { class: "hero-actions" }, [
              h("button", { id: "assist-open", class: "cta", type: "button" }, "打开适老化"),
              h("span", { class: "status" }, `状态：${status.value}`),
              h("span", { class: "status" }, mode.value)
            ])
          ]),
          h("div", { class: "hero-panel", "data-aging-ignore": "true" }, [
            h("strong", "接入优先级"),
            h("span", "script 一行引入"),
            h("span", "npm / ESM 双入口"),
            h("span", "本地记忆用户偏好")
          ])
        ]),
        h("main", { class: "content" }, [
          h("section", { class: "panel feature-panel" }, [
            h("div", { class: "section-title" }, [
              h("p", "体验区"),
              h("h2", "真实页面能力测试")
            ]),
            h("article", { class: "article qunar-assist-long-text", "data-aging-readable": "true" }, [
              h("h3", "办事指南"),
              h(
                "p",
                "老年用户最怕的是按钮太小、字太密、流程太长。新的适老化插件要做的，不是把所有内容简单放大，而是让关键动作更清楚、更稳、更不容易点错。"
              ),
              h(
                "p",
                "把鼠标移到正文、表单和按钮上，可以测试指读、大字幕和朗读；打开高对比可以检查页面可读性；开启防误触后点击提交，会先出现确认弹窗。"
              ),
              h("div", { class: "notice", title: "温馨提示：办理前请准备身份证和手机号" }, [
                h("strong", "温馨提示"),
                h("span", "办理前请准备身份证和常用手机号。")
              ])
            ]),
            h("form", { class: "service-form", "data-aging-readable": "true" }, [
              h("label", { class: "field" }, [
                h("span", "姓名"),
                h("input", { placeholder: "请输入姓名", autocomplete: "name" })
              ]),
              h("label", { class: "field" }, [
                h("span", "手机号"),
                h("input", { placeholder: "请输入手机号", type: "tel", autocomplete: "tel" })
              ]),
              h("label", { class: "field wide" }, [
                h("span", "办理事项"),
                h("select", [
                  h("option", "养老补贴资格咨询"),
                  h("option", "社区上门服务预约"),
                  h("option", "医保窗口协助办理")
                ])
              ]),
              h("button", { class: "secondary", type: "button", title: "保存草稿" }, "保存草稿"),
              h(
                "button",
                {
                  class: "danger",
                  type: "button",
                  "data-aging-danger": "true",
                  "data-aging-text": "提交申请，这是需要确认的危险操作"
                },
                "提交申请"
              )
            ])
          ]),
          h("aside", { class: "panel side" }, [
            h("div", { class: "section-title" }, [
              h("p", "接入方式"),
              h("h2", "给老网站和新项目都留好入口")
            ]),
            h("ul", [
              h("li", "script 引入：适合老网站、CMS、静态页面"),
              h("li", "npm 引入：适合 Vue / React / Vite 项目"),
              h("li", "实例 API：支持手动开关、播报、订阅状态"),
              h("li", "标注规范：支持 alt、title、role、data-aging-text")
            ]),
            h("div", { class: "telemetry", "data-aging-ignore": "true" }, [
              h("span", "最后事件"),
              h("strong", lastAction.value)
            ])
          ]),
          h("section", { class: "panel table-panel" }, [
            h("div", { class: "section-title" }, [
              h("p", "阅读对象"),
              h("h2", "表格和语义标注")
            ]),
            h("table", [
              h("thead", [
                h("tr", [h("th", "能力"), h("th", "页面标注"), h("th", "效果")])
              ]),
              h("tbody", [
                h("tr", [h("td", "图片朗读"), h("td", "alt"), h("td", "读取图片含义")]),
                h("tr", [h("td", "非语义按钮"), h("td", "role + title"), h("td", "朗读真实动作")]),
                h("tr", [h("td", "隐藏区域"), h("td", "data-aging-ignore"), h("td", "不干扰工具读屏")])
              ])
            ]),
            h(
              "button",
              {
                class: "fake-button",
                type: "button",
                title: "在线咨询人工客服"
              },
              "在线咨询"
            )
          ])
        ])
      ]);
  }
});

createApp(DemoApp).mount("#app");
