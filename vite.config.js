import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",

    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

  base: "./",
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "cobertura"],
      exclude: ["node_modules/", "src/test/"],
    },
  },
});
