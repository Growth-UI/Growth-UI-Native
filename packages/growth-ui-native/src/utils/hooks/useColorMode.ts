import { useColorScheme } from "react-native";

type Scheme = "auto" | "dark" | "light";

const useColorMode = (scheme: Scheme) => {
  const mode = scheme === "auto" ? useColorScheme() || "light" : scheme;

  return mode;
};

export default useColorMode;
