import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss(), viteReact()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: resolve(__dirname, "../../flowerquest"),
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, "./src/standalone.tsx"),
      output: {
        entryFileNames: "assets/standalone.js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/standalone.[ext]",
      },
    },
  },
});
