import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function LabelImportant(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path fill="none" d="M0 0h24v24H0V0z"></Path>
      <Path d="M4 18.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99z"></Path>
    </Svg>
  );
}
