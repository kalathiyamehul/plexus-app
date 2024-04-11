import { View } from 'native-base';
import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function (props) {
    const { width = 15, height = 15 } = props;
    return (
        <View style={props.style}>
            <Svg
                viewBox={`0 0 ${width} ${height}`}
                width={width}
                height={height}
                {...props}
            >
                <Path
                    clipRule="evenodd"
                    d="M13.678 3.349c-.708.815-.99 5.94-.167 6.764.824.822 5.768.406 6.957-.53 2.858-2.25-4.53-8.836-6.79-6.234z"
                    {...props}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    clipRule="evenodd"
                    d="M18.138 13.79c1.084 1.084-1.79 7.264-7.486 7.264a7.701 7.701 0 01-7.702-7.7c0-5.3 5.229-8.69 6.728-7.192.863.863-.11 4.924 1.439 6.473 1.548 1.55 5.937.071 7.02 1.155z"
                    {...props}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
}