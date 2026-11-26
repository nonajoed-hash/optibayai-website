import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import { BACKEND_CONFIG } from "@/config/backend";
import "./index.css";

if (!BACKEND_CONFIG.IS_PRODUCTION_SITE) {
  const robots = document.createElement("meta");
  robots.name = "robots";
  robots.content = "noindex, nofollow";
  document.head.appendChild(robots);
}

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    {BACKEND_CONFIG.IS_PRODUCTION_SITE && <Analytics />}
  </>
);
