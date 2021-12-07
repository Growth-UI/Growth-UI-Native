import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function ChevronLeft(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></Path>
    </Svg>
  );
}
