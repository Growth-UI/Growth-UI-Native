import React from 'react';
import {Svg, Path, SvgProps} from 'react-native-svg';

export default function ChevronRight(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      height="25"
      width="25"
      fill="currentColor"
      {...props}>
      <Path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></Path>
    </Svg>
  );
}
