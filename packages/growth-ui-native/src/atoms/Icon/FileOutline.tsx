import React from "react";
import { Polyline, Svg, Path, SvgProps } from "react-native-svg";

export default function FileOutline(props: SvgProps) {
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
      <Path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></Path>
      <Polyline points="13 2 13 9 20 9"></Polyline>
    </Svg>
  );
}
