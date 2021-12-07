import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Notifications(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zm144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z"></Path>
    </Svg>
  );
}
