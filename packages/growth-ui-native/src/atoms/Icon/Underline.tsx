import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Underline(props: SvgProps) {
  return (
    <Svg viewBox="0 0 16 16" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"></Path>
    </Svg>
  );
}
