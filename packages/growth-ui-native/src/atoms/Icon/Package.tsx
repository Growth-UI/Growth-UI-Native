import React from "react";
import { Line, Path, Polyline, Svg, SvgProps } from "react-native-svg";

export default function Package(props: SvgProps) {
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
      <Line x1="16.5" x2="7.5" y1="9.4" y2="4.21"></Line>
      <Path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></Path>
      <Polyline points="3.27 6.96 12 12.01 20.73 6.96"></Polyline>
      <Line x1="12" x2="12" y1="22.08" y2="12"></Line>
    </Svg>
  );
}
