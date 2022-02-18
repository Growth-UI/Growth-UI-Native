import React from "react";

export type Scheme = "light" | "dark";

export type ThemeContextState = {
  mode: Scheme;
};

const ThemeContext = React.createContext<ThemeContextState>({
  mode: "light",
});

export default ThemeContext;
