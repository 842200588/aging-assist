import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/sdk/index.ts"),
      name: "AgingAssist",
      formats: ["es", "iife"],
      fileName: (format) =>
        format === "es" ? "aging-assist.es.js" : "aging-assist.iife.js"
    }
  }
});
