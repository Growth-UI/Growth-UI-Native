import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export default function Phone(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" {...props}>
      <Path fill="none" d="M0 0h24v24H0z"></Path>
      <Path d="M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></Path>
    </Svg>
  );
}
