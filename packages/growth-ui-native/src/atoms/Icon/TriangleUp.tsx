import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function TriangleUp(props: SvgProps) {
  return (
    <Svg viewBox="0 0 16 16" height="25" width="25" fill="currentColor" {...props}>
      <Path d="m4.427 9.573 3.396-3.396a.25.25 0 0 1 .354 0l3.396 3.396a.25.25 0 0 1-.177.427H4.604a.25.25 0 0 1-.177-.427z"></Path>
    </Svg>
  );
}
