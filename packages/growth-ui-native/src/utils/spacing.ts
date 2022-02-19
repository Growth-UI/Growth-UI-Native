import pick from "lodash/pick";
import { numberToString } from "./numberToString";
import { SX } from "../types";

export const mapSxToSpacing = {
  m: "margin",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
} as any;

export default function spacing(props: SX = {}) {
  const spacingProps = pick(props, [
    "m",
    "mb",
    "ml",
    "mr",
    "mt",
    "mx",
    "my",
    "p",
    "pb",
    "pl",
    "pr",
    "pt",
    "px",
    "py",
  ]);

  return Object.keys(spacingProps).reduce((acc, cur) => {
    if (cur === "mx") {
      return {
        ...acc,
        marginLeft: numberToString(spacingProps[cur]),
        marginRight: spacingProps[cur],
      };
    }

    if (cur === "my") {
      return {
        ...acc,
        marginTop: numberToString(spacingProps[cur]),
        marginBottom: spacingProps[cur],
      };
    }

    if (cur === "px") {
      return {
        ...acc,
        paddingLeft: numberToString(spacingProps[cur]),
        paddingRight: spacingProps[cur],
      };
    }

    if (cur === "py") {
      return {
        ...acc,
        paddingTop: numberToString(spacingProps[cur]),
        paddingBottom: spacingProps[cur],
      };
    }

    return {
      ...acc,
      [mapSxToSpacing[cur]]: numberToString(spacingProps[cur as keyof typeof spacingProps]),
    };
  }, {});
}
