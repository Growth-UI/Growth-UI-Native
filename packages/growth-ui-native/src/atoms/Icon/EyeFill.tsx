import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function EyeFill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 16 16" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></Path>
      <Path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></Path>
    </Svg>
  );
}
