import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Shipping(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path fill="none" d="M0 0h24v24H0z"></Path>
      <Path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></Path>
    </Svg>
  );
}
