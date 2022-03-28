import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Dot(props: SvgProps) {
  return (
    <Svg viewBox="0 0 16 16" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></Path>
    </Svg>
  );
}
