import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function ChevronDown(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></Path>
    </Svg>
  );
}
