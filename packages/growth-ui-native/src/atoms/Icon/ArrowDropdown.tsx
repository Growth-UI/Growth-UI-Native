import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function ArrowDropdown(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="15" width="15" fill="currentColor" {...props}>
      <Path fill="none" d="M0 0h24v24H0z"></Path>
      <Path d="M7 10l5 5 5-5z"></Path>
    </Svg>
  );
}
