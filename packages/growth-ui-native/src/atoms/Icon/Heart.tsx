import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Heart(props: SvgProps) {
  return (
    <Svg viewBox="0 0 20 20" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0L10 5.197 8.864 4.155c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"></Path>
    </Svg>
  );
}
