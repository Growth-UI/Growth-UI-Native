import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Italic(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"></Path>
    </Svg>
  );
}
