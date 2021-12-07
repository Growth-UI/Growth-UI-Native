import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Menu(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="none" stroke="currentColor" {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></Path>
    </Svg>
  );
}
