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
                    d="M7.5 1.715a3 3 0 013 0l4.794 2.768a3 3 0 011.5 2.598v5.536a3 3 0 01-1.5 2.598L10.5 17.983a3 3 0 01-3 0l-4.794-2.768a3 3 0 01-1.5-2.598V7.08a3 3 0 011.5-2.598L7.5 1.715z"
                    fill="#45B36B"
                />
                <Path
                    d="M6 9.849l2 2 4-4" 
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    {...props}
                />
            </Svg>
        </View>
    );
}