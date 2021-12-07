import React, { FC } from "react";
import ThemeContext, { Scheme } from "./ThemeContext";
import { useColorMode } from "./utils";

type Props = {
  mode: Scheme | "auto";
};

const ThemeProvider: FC<Props> = (props) => {
  const { children, mode = "auto" } = props;

  const _mode = useColorMode(mode);

  return (
    <ThemeContext.Provider
      value={{
        mode: _mode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
