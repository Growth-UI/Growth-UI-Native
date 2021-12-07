import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function ThumbsDown(props: SvgProps) {
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
      <Path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"></Path>
    </Svg>
  );
}
