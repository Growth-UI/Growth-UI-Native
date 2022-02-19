import assignIn from "lodash/assignIn";
import palette from "./palette";
import pick from "lodash/pick";
import sizing from "./sizing";
import spacing from "./spacing";
import { SX } from "../types";

export default function sxParser(sx?: SX) {
  const style: Record<string, any> = {};

  assignIn(style, spacing(sx));
  assignIn(style, sizing(sx));
  assignIn(style, palette(sx));
  assignIn(
    style,
    pick(sx, [
      "backfaceVisibility",
      "backgroundColor",
      "borderBottomColor",
      "borderBottomEndRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
      "borderBottomStartRadius",
      "borderBottomWidth",
      "borderColor",
      "borderEndColor",
      "borderLeftColor",
      "borderLeftWidth",
      "borderRadius",
      "borderRightColor",
      "borderRightWidth",
      "borderStartColor",
      "borderStyle",
      "borderTopColor",
      "borderTopEndRadius",
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderTopStartRadius",
      "borderTopWidth",
      "borderWidth",
      "opacity",
      "alignContent",
      "alignItems",
      "alignSelf",
      "aspectRatio",
      "borderBottomWidth",
      "borderEndWidth",
      "borderLeftWidth",
      "borderRightWidth",
      "borderStartWidth",
      "borderTopWidth",
      "borderWidth",
      "bottom",
      "display",
      "end",
      "flex",
      "flexBasis",
      "flexDirection",
      "flexGrow",
      "flexShrink",
      "flexWrap",
      "height",
      "justifyContent",
      "left",
      "margin",
      "marginBottom",
      "marginEnd",
      "marginHorizontal",
      "marginLeft",
      "marginRight",
      "marginStart",
      "marginTop",
      "marginVertical",
      "maxHeight",
      "maxWidth",
      "minHeight",
      "minWidth",
      "overflow",
      "padding",
      "paddingBottom",
      "paddingEnd",
      "paddingHorizontal",
      "paddingLeft",
      "paddingRight",
      "paddingStart",
      "paddingTop",
      "paddingVertical",
      "position",
      "right",
      "start",
      "top",
      "width",
      "zIndex",
      "direction",
      "shadowColor",
      "shadowOffset",
      "shadowOpacity",
      "shadowRadius",
    ])
  );

  return style;
}
