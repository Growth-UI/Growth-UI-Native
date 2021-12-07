import React from "react";
import { Circle, Svg, Path, SvgProps } from "react-native-svg";

export default function PurchaseTag(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M13.707 3.293A.996.996 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-8-8zM12 19.586l-7-7V5h7.586l7 7L12 19.586z"></Path>
      <Circle cx="8.496" cy="8.495" r="1.505"></Circle>
    </Svg>
  );
}
