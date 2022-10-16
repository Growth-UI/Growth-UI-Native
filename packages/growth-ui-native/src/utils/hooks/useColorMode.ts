import { useColorScheme } from "react-native";

type Scheme = "auto" | "dark" | "light";

const useColorMode = (scheme: Scheme) => {
  const systemScheme = useColorScheme();
  const mode = scheme === "auto" ? systemScheme || "light" : scheme;

  return mode;
};

export default useColorMode;
