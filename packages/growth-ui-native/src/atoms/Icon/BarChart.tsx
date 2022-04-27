import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export default function BarChart(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path fill="none" d="M0 0h24v24H0V0z"></Path>
      <Path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"></Path>
    </Svg>
  );
}
