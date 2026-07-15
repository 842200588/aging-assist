import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  const isIife = mode === "iife";
  return {
    plugins: [vue()],
    build: {
      emptyOutDir: !isIife,
      lib: {
        entry: resolve(__dirname, "src/sdk/index.ts"),
        name: "AgingAssist",
        formats: [isIife ? "iife" : "es"],
        fileName: () => (isIife ? "aging-assist.iife.js" : "aging-assist.es.js")
      },
      rollupOptions: {
        external: isIife ? [] : ["vue", "lucide-vue-next"]
      }
    }
  };
});
