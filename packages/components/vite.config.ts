import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      fileName: "[name]",
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
