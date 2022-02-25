import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export default function Plus(props: SvgProps) {
  return (
    <Svg viewBox="0 0 20 20" height="25" width="25" fill="currentColor" {...props}>
      <Path
        fill-rule="evenodd"
        d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z"
        clip-rule="evenodd"
      ></Path>
    </Svg>
  );
}
