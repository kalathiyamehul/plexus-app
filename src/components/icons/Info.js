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
                    d="M9 16.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM9 15A6 6 0 109 3a6 6 0 000 12zm-.75-9.75h1.5v1.5h-1.5v-1.5zm0 3h1.5v4.5h-1.5v-4.5z"
                    {...props}
                />
            </Svg>
        </View>
    );
}