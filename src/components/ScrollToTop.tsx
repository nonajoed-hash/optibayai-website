import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) { target.scrollIntoView(); return; }
      }
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
};
