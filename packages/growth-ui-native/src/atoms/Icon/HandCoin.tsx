import React from "react";
import { Path, Svg, SvgProps } from "react-native-svg";

export default function HandCoin(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height="25" width="25" fill="currentColor" {...props}>
      <Path fill="none" d="M0 0h24v24H0z"></Path>
      <Path d="M9.33 11.5h2.17A4.5 4.5 0 0116 16H8.999L9 17h8v-1a5.578 5.578 0 00-.886-3H19a5 5 0 014.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625v-9.304A6.967 6.967 0 019.33 11.5zM5 19a1 1 0 01-1 1H2a1 1 0 01-1-1v-9a1 1 0 011-1h2a1 1 0 011 1v9zM18 5a3 3 0 110 6 3 3 0 010-6zm-7-3a3 3 0 110 6 3 3 0 010-6z"></Path>
    </Svg>
  );
}
