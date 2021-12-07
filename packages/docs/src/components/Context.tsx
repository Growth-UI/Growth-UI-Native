import { createContext, Dispatch, SetStateAction } from "react";

type Context = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export default createContext<Context>({
  darkMode: false,
  setDarkMode: () => null,
});
