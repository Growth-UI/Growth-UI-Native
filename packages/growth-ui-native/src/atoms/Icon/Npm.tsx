import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Npm(props: SvgProps) {
  return (
    <Svg viewBox="0 0 576 512" height="25" width="25" fill="currentColor" {...props}>
      <Path
        fill="currentColor"
        d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"
      />
    </Svg>
  );
}
