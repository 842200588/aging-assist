import type { AssistLabels, AssistState } from "../types";
type __VLS_Props = {
    state: AssistState;
    labels: AssistLabels;
    position: "top" | "bottom";
    theme: "warm" | "official" | "dark";
    idPrefix: string;
    showLauncher: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    action: (name: string, value?: unknown) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onAction?: ((name: string, value?: unknown) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
