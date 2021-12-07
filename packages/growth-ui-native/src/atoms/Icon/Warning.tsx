import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

export default function Warning(props: SvgProps) {
  return (
    <Svg viewBox="0 0 20 20" height="25" width="25" fill="currentColor" {...props}>
      <Path d="M19.511 17.98L10.604 1.348a.697.697 0 00-1.208 0L.49 17.98a.675.675 0 00.005.68c.125.211.352.34.598.34h17.814a.694.694 0 00.598-.34.677.677 0 00.006-.68zM11 17H9v-2h2v2zm0-3.5H9V7h2v6.5z"></Path>
    </Svg>
  );
}
