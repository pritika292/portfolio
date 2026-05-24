import { useEffect, useState, useCallback } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio:theme";

function readInitial(): Theme {
  // The inline script in index.html already set this before React mounted;
  // we just re-read from the DOM so the hook's initial state matches what
  // the user sees.
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}

function apply(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage disabled (Safari private, embedded webview) — silently no-op.
  }
}

export function useTheme(): {
  theme: Theme;
  toggle: () => void;
  set: (t: Theme) => void;
} {
  const [theme, setTheme] = useState<Theme>(readInitial);

  useEffect(() => {
    apply(theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const set = useCallback((t: Theme) => setTheme(t), []);

  return { theme, toggle, set };
}
