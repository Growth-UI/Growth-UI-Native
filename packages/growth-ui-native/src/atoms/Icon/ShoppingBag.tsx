import React from "react";
import { Line, Svg, Path, SvgProps } from "react-native-svg";

export default function ShoppingBag(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      height="25"
      width="25"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></Path>
      <Line x1="3" x2="21" y1="6" y2="6"></Line>
      <Path d="M16 10a4 4 0 01-8 0"></Path>
    </Svg>
  );
}
