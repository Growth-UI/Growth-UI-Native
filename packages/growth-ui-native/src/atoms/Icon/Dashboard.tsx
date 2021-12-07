import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Dashboard(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path fill="none" d="M0 0h24v24H0V0z"></Path>
      <Path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></Path>
    </Svg>
  );
}
