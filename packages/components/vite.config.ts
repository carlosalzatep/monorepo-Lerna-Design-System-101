import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      fileName: "[name]",
    },
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
