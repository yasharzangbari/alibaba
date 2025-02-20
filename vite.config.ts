import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import path from "path";
import { defineConfig } from "vite";
import VitePluginInjectPreload from "vite-plugin-inject-preload";

export default defineConfig({
  plugins: [
    react(),
    ssr(),
    VitePluginInjectPreload({
      files: [
        {
          match: /lazy.[a-z-0-9]*.(css)$/,
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "~types": path.resolve(__dirname, "types"),
      "~constants": path.resolve(__dirname, "constants"),
      "~hooks": path.resolve(__dirname, "hooks"),
      "~components": path.resolve(__dirname, "components"),
      "~lib": path.resolve(__dirname, "lib"),
      "~utils": path.resolve(__dirname, "utils"),
    },
  },
});
