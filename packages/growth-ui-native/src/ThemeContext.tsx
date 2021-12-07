import { createContext } from "react";

export type Scheme = "light" | "dark";

export type ThemeContextState = {
  mode: Scheme;
};

const ThemeContext = createContext<ThemeContextState>({
  mode: "light",
});

export default ThemeContext;
