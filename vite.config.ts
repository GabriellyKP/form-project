import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Configurações do Service Worker e PWA
      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "apple-touch-icon.png",
        "favicon.ico",
      ],
      manifest: {
        name: "Meu Aplicativo",
        short_name: "Aplicativo",
        description: "Descrição do meu aplicativo.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
