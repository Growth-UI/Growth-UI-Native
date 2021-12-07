import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Play(props: SvgProps) {
  return (
    <Svg viewBox="0 0 48 48" height="25" width="25" fill="currentColor" {...props}>
      <Path d="m16.75 8.41 24.42 12.7a3.25 3.25 0 0 1 0 5.77l-24.42 12.7A3.25 3.25 0 0 1 12 36.7V11.3a3.25 3.25 0 0 1 4.55-2.98l.2.1z"></Path>
    </Svg>
  );
}
