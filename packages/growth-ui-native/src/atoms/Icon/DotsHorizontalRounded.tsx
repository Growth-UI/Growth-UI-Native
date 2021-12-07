import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function DotsHorizontalRounded(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></Path>
    </Svg>
  );
}
