import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
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
