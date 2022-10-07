import { Dimensions, PixelRatio, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTablet = () => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;

  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  }

  return pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920);
};

const useDetectDevice = {
  isAndroid: Platform.OS === "android",
  isIOS: Platform.OS === "ios",
  isTablet: isTablet(),
};

export default useDetectDevice;
