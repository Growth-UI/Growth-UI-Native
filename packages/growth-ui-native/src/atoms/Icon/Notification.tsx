import React from "react";
import { Circle, Path, Svg, SvgProps } from "react-native-svg";

export default function Notification(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <title>Notification icon</title>
      <Circle cx="18" cy="6" r="3"></Circle>
      <Path d="M18 19H5V6h8c0-.712.153-1.387.422-2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h13c1.103 0 2-.897 2-2v-8.422A4.962 4.962 0 0 1 18 11v8z"></Path>
    </Svg>
  );
}
