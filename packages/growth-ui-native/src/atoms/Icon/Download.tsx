import React from "react";
import { Line, Path, Polyline, Svg, SvgProps } from "react-native-svg";

export default function Download(props: SvgProps) {
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
      <Path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></Path>
      <Polyline points="7 10 12 15 17 10"></Polyline>
      <Line x1="12" x2="12" y1="15" y2="3"></Line>
    </Svg>
  );
}
