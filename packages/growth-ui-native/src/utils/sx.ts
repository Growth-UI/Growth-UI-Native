import assignIn from "lodash/assignIn";
import sizing from "./sizing";
import spacing from "./spacing";
import { SX } from "../types";
import palette from "./palette";

export default function sxParser(sx?: SX) {
  const style: Record<string, any> = {};

  assignIn(style, spacing(sx));
  assignIn(style, sizing(sx));
  assignIn(style, palette(sx));

  return style;
}
