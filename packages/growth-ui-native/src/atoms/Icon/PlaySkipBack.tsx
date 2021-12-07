import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function PlaySkipBack(props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M112 64a16 16 0 0116 16v136.43L360.77 77.11a35.13 35.13 0 0135.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 01-35.77-.45L128 295.57V432a16 16 0 01-32 0V80a16 16 0 0116-16z"></Path>
    </Svg>
  );
}
