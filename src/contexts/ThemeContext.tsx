"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface ThemeType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme:dark").matches;
    const themeGet = Cookies.get("theme");

    if (!themeGet) {
      const initialTheme = prefersDark ? "dark" : "light";
      Cookies.set("theme", initialTheme, { expires: 365 });
      setTheme(initialTheme);
    } else {
      setTheme(themeGet);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    Cookies.set("theme", newTheme, { expires: 365 });
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
