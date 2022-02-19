import pick from "lodash/pick";
import { SX } from "../types";

export default function sizing(props: SX = {}) {
  const sizingProps = pick(props, ["w", "h", "maxWidth", "minWidth", "maxHeight", "minHeight"]);

  return Object.keys(sizingProps).reduce((acc, cur) => {
    if (cur === "w") {
      return {
        ...acc,
        width: sizingProps.w,
      };
    }

    if (cur === "h") {
      return {
        ...acc,
        height: sizingProps.h,
      };
    }

    return {
      ...acc,
      [cur]: sizingProps[cur as keyof typeof sizingProps],
    };
  }, {});
}
