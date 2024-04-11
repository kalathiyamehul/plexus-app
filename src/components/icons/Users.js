import {View} from 'native-base';
import React from 'react';
import Svg, {G, Mask, Path} from 'react-native-svg';

export default function (props) {
  const {width = 15, height = 15} = props;
  return (
    <View style={props.style}>
      <Svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        {...props}>
        <Mask
          id="a"
          maskUnits="userSpaceOnUse"
          x={2}
          y={13}
          width={16}
          height={9}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 13.957h15.184v7.1H2v-7.1z"
            fill="#fff"
          />
        </Mask>
        <G mask="url(#a)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.592 15.457c-2.779 0-6.092.357-6.092 2.062 0 1.352 2.05 2.038 6.092 2.038s6.092-.693 6.092-2.058c0-1.355-2.05-2.042-6.092-2.042zm0 5.6c-2.076 0-7.592 0-7.592-3.538 0-3.562 5.714-3.562 7.592-3.562 3.259 0 7.592.367 7.592 3.542 0 3.558-5.714 3.558-7.592 3.558z"
            {...props}
          />
        </G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.592 3.5a3.64 3.64 0 00-3.636 3.635 3.64 3.64 0 003.636 3.635h.03a3.594 3.594 0 002.554-1.07 3.587 3.587 0 001.05-2.562A3.64 3.64 0 009.593 3.5zm0 8.77a5.142 5.142 0 01-5.136-5.135A5.142 5.142 0 019.592 2a5.141 5.141 0 015.135 5.135 5.077 5.077 0 01-1.487 3.622 5.081 5.081 0 01-3.614 1.513h-.034zM16.482 11.132a.75.75 0 01-.104-1.493 2.559 2.559 0 002.192-2.52 2.538 2.538 0 00-2.133-2.514.75.75 0 01.242-1.481A4.033 4.033 0 0120.07 7.12a4.069 4.069 0 01-3.483 4.005.74.74 0 01-.105.007z"
          {...props}
        />
        <Mask
          id="b"
          maskUnits="userSpaceOnUse"
          x={17}
          y={13}
          width={5}
          height={6}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.845 13.483h4.134v4.978h-4.134v-4.978z"
            fill="#fff"
          />
        </Mask>
        <G mask="url(#b)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.895 18.46a.75.75 0 01-.265-1.45c.85-.322.85-.715.85-.883 0-.567-.672-.955-1.995-1.152a.752.752 0 01-.631-.853.762.762 0 01.852-.632c2.707.405 3.274 1.658 3.274 2.637 0 .729-.316 1.716-1.819 2.285a.75.75 0 01-.266.049z"
            {...props}
          />
        </G>
      </Svg>
    </View>
  );
}
