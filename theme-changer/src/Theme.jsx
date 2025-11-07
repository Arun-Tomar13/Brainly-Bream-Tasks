// src/theme.jsx
import React, { createContext, useContext, useLayoutEffect, useState, useCallback } from "react";

const ThemeContext = createContext();
const KEY = "theme";
const COOKIE_DAYS = 365;
const LS_KEY = "theme";

// Helpers (fast, minimal)
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

function readCookie(name) {
  if (!isBrowser) return null;
  try {
    const pair = document.cookie
      .split("; ")
      .find((c) => c.startsWith(encodeURIComponent(name) + "="));
    return pair ? decodeURIComponent(pair.split("=")[1]) : null;
  } catch {
    return null;
  }
}

function writeCookie(name, value, days = COOKIE_DAYS) {
  if (!isBrowser) return false;
  try {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
    return true;
  } catch {
    return false;
  }
}

function removeCookie(name) {
  if (!isBrowser) return;
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

// Provider
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (!isBrowser) return "light";
    const c = readCookie(KEY);
    if (c === "light" || c === "dark") return c;
    try {
      const ls = localStorage.getItem(LS_KEY);
      if (ls === "light" || ls === "dark") return ls;
    } catch {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useLayoutEffect(() => {
    if (!isBrowser) return;
    const el = document.documentElement;
    theme === "dark" ? el.classList.add("dark") : el.classList.remove("dark");

    // persist: try cookie, fallback to localStorage
    if (!writeCookie(KEY, theme)) {
      try { localStorage.setItem(LS_KEY, theme); } catch {}
    } else {
      try { localStorage.removeItem(LS_KEY); } catch {}
    }
  }, [theme]);

  const setTheme = useCallback((t) => setThemeState(t), []);
  const toggle = useCallback(() => setThemeState((t) => (t === "light" ? "dark" : "light")), []);
  const clearStoredTheme = useCallback(() => {
    if (!isBrowser) return;
    removeCookie(KEY);
    try { localStorage.removeItem(LS_KEY); } catch {}
    const sys = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setThemeState(sys);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme, clearStoredTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
};
