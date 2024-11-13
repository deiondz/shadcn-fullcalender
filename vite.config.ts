import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import pkg from "./package.json";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    // Dev config
    return {
      plugins: [react(), tsconfigPaths()],
      root: path.resolve(__dirname, "dev"),
      build: {
        outDir: path.resolve(__dirname, "dist"),
      },
    };
  } else {
    // Build config
    return {
      plugins: [react(), dts(), tsconfigPaths()],
      build: {
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: pkg.name,
          formats: ["es", "umd", "cjs"],
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom", "react-router-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
      resolve: {
        dedupe: ["react", "react-dom", "react-router-dom"],
      },
    };
  }
});
