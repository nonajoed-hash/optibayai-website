import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readFileSync, writeFileSync } from "node:fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), {
    name: "preview-noindex",
    transformIndexHtml() {
      if (process.env.VERCEL_ENV === "production") return [];
      return [{ tag: "meta", attrs: { name: "robots", content: "noindex, nofollow" }, injectTo: "head" }];
    },
    closeBundle() {
      if (process.env.VERCEL_ENV === "production") return;
      const sms = path.resolve(__dirname, "dist/sms-consent/index.html");
      const html = readFileSync(sms, "utf8");
      writeFileSync(sms, html.replace('name="robots" content="index,follow"', 'name="robots" content="noindex,nofollow"'));
    },
  }].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  // Force clear cache on rebuild - timestamp: 2025-12-15T02
  optimizeDeps: {
    force: true,
  },
  // Define env vars explicitly for debugging
  define: {
    '__BUILD_TIME__': JSON.stringify(new Date().toISOString()),
  },
}));
