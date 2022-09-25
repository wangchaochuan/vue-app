import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  return {
    plugins: [
      vue(),
      qiankun("sub-vite2-vue3", {
        useDevMode: true,
      }),
    ],
    base: isDev ? "/" : "//localhost:3002",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      port: 3002,
      origin: "//localhost:3002",
    },
  };
});
