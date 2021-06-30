import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import type { ReactChild } from "react";

type ContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ContextType | null>(null);

const ThemeProvider = ({ children }: { children: ReactChild }) => {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  if (theme === undefined)
    throw new Error("useTheme should be used within a ThemeProvider");
  return { theme, toggleTheme } as const;
};

export default ThemeProvider;
export { useTheme };
