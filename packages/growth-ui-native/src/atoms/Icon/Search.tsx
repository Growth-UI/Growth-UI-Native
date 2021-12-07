import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Search(props: SvgProps) {
  return (
    <Svg viewBox="0 0 50 50" height="30" width="30" fill="currentColor" {...props}>
      <Path d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"></Path>
      <Path d="M32.682 31.267l8.98 8.98-1.414 1.414-8.98-8.98z"></Path>
    </Svg>
  );
}
