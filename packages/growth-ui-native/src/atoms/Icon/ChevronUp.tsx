import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function ChevronUp(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></Path>
    </Svg>
  );
}
