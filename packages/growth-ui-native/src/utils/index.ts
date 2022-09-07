import { Platform } from "react-native";

export { createChildren, createShorthandFactory, buildShorthand } from "./factories";
export * as GUI from "./GUI";
export { partitionNativeProps, nativeInputProps, nativeImageProps } from "./nativeProps";
export { default as useColorMode } from "./hooks/useColorMode";
export { default as IntersectionObserver } from "./intersectionObserver";
export { Screen, ScreenHeight, ScreenWidth } from "./screen";
export { default as sx } from "./sx";

export const isIOS = Platform.OS === "ios";

export { StatusBarHeight } from "./status-bar-height";
