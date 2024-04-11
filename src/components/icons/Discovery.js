import { View } from 'native-base';
import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function (props) {
    const { mb = 5, size = 15 } = props;
    return (
        <View style={props.style}>
            <Svg viewBox="0 0 20 20" style={[{ height: size, width: size, marginBottom: mb }, props.svgStyle]}>
                <Path
                    strokeWidth={0}
                    fill={props.color}
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M0.00 10.00 C0.00 4.48 4.47 0.00 10.00 0.00 C15.52 0.00 20.00 4.48 20.00 10.00 C20.00 15.53 15.52 20.00 10.00 20.00 C4.47 20.00 0.00 15.53 0.00 10.00 Z M12.23 11.83 L13.85 6.71 L13.29 6.14 L8.17 7.74 L7.73 8.18 L6.13 13.31 L6.69 13.87 L11.79 12.27 L12.23 11.83 Z"
                ></Path>
            </Svg>
        </View>
    );
}