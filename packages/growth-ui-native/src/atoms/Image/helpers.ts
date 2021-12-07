import isNumber from "lodash/isNumber";
import toNumber from "lodash/toNumber";
import { Image, View } from "react-native";

export const getImageSize = async (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) =>
    Image.getSize(src, (width, height) => resolve({ width, height }), reject)
  );
};

export const getImageHeightFitWidth = async (src: string, width: number) => {
  try {
    const image = await getImageSize(src);
    const ratio = image.width / image.height;

    return width / ratio;
  } catch (err) {
    return width;
  }
};

export const getImageWidthByPercentage = async (node: View, p = "100%"): Promise<number> => {
  return new Promise((resolve) => {
    const percentage = toNumber(p.split("%")[0]);

    if (!isNumber(percentage)) {
      return resolve(0);
    }

    node.measure((_, __, width) => resolve((width * percentage) / 100));
  });
};
