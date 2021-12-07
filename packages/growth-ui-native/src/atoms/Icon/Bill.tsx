import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Bill(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path fill="none" d="M0 0h24v24H0z"></Path>
      <Path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM8 9v2h8V9H8zm0 4v2h8v-2H8z"></Path>
    </Svg>
  );
}
