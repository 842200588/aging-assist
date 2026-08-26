import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    __AGING_ASSIST_IIFE__: JSON.stringify(true)
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/sdk/subtitle-runtime.ts"),
      name: "AgingAssistSubtitle",
      formats: ["iife"],
      fileName: () => "aging-assist-subtitle.iife.js"
    }
  }
});
