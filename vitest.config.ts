import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary"],
      include: ["src/sdk/**/*.{ts,vue}"],
      exclude: ["src/sdk/index.ts", "src/sdk/types.ts", "**/*.test.ts"],
      thresholds: {
        lines: 70,
        functions: 60,
        statements: 70,
        branches: 70
      }
    }
  }
});
