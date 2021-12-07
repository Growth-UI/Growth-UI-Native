import React from 'react';
import {Path, Polyline, Svg, SvgProps} from 'react-native-svg';

export default function Home(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      height="25"
      width="25"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></Path>
      <Polyline points="9 22 9 12 15 12 15 22"></Polyline>
    </Svg>
  );
}
