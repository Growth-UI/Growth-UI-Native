import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Check(props: SvgProps) {
  return (
    <Svg viewBox="0 0 16 16" height="30" width="30" fill="currentColor" {...props}>
      <Path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></Path>
    </Svg>
  );
}
