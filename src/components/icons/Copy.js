import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Copy(props) {
  const {size = 15} = props;
  return (
    <Svg
      viewBox="0 0 13 13"
      fill="none"
      style={[{height: size, width: size}, props.svgStyle]}>
      <Path
        d="M10.833 4.875H5.958c-.598 0-1.083.485-1.083 1.083v4.875c0 .599.485 1.084 1.083 1.084h4.875c.599 0 1.084-.485 1.084-1.084V5.958c0-.598-.485-1.083-1.084-1.083z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.708 8.125h-.541a1.083 1.083 0 01-1.083-1.083V2.167a1.083 1.083 0 011.083-1.083h4.875a1.083 1.083 0 011.083 1.083v.542"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Copy;
