import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [vue(), UnoCSS()],
  optimizeDeps: {
    include: ["vue", "pinia"],
  },
});
