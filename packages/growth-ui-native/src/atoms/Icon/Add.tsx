import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Add(props: SvgProps) {
  return (
    <Svg viewBox="0 0 28 28" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M14.5 13V3.75a.75.75 0 0 0-1.5 0V13H3.75a.75.75 0 0 0 0 1.5H13v9.25a.75.75 0 0 0 1.5 0V14.5h9.25a.75.75 0 0 0 0-1.5H14.5z"></Path>
    </Svg>
  );
}