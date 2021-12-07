import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Send(props: SvgProps) {
  return (
    <Svg viewBox="0 0 28 28" height="25" width="25" fill="currentColor" {...props}>
      <Path d="m3.79 2.77 21.07 10.08a1.25 1.25 0 0 1 0 2.26L3.8 25.18a1.25 1.25 0 0 1-1.75-1.45l2.66-9.75-2.66-9.75A1.25 1.25 0 0 1 3.8 2.77zm-.15 1.6 2.42 8.88H17c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01H6.05l-2.41 8.84 20.1-9.61-20.1-9.62z"></Path>
    </Svg>
  );
}
