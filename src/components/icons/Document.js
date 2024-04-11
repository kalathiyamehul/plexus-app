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
                    d="M15.716 16.223h-7.22M15.716 12.037h-7.22M11.251 7.86H8.496"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    {...props}
                />
                <Path
                    clipRule="evenodd"
                    d="M15.909 2.75l-7.69.004C5.46 2.77 3.75 4.587 3.75 7.357v9.196c0 2.784 1.722 4.607 4.506 4.607l7.69-.003c2.76-.017 4.47-1.834 4.47-4.604V7.357c0-2.784-1.724-4.607-4.508-4.607z"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    {...props}
                />
            </Svg>
        </View>
    );
}