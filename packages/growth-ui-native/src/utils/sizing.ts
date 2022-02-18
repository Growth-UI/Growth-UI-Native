import pick from "lodash/pick";
import { numberToString } from "./numberToString";
import { SX } from "../types";

export default function sizing(props: SX = {}) {
  const sizingProps = pick(props, ["w", "h", "maxWidth", "minWidth", "maxHeight", "minHeight"]);

  return Object.keys(sizingProps).reduce((acc, cur) => {
    if (cur === "w") {
      return {
        ...acc,
        width: numberToString(sizingProps.w),
      };
    }

    if (cur === "h") {
      return {
        ...acc,
        height: numberToString(sizingProps.h),
      };
    }

    return {
      ...acc,
      [cur]: numberToString(sizingProps[cur as keyof typeof sizingProps]),
    };
  }, {});
}
