import { View } from 'native-base';
import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function (props) {
    const { mb = 5, size = 15 } = props;
    return (
        <View style={props.style}>
            <Svg
                viewBox="0 0 21 20"
                style={[{ height: size, width: size, marginBottom: mb }, props.svgStyle]}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.29 5.291a5.274 5.274 0 01-5.293 5.292 5.275 5.275 0 01-5.294-5.292A5.274 5.274 0 018.997 0a5.273 5.273 0 015.294 5.291zM8.998 20c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.338 0 8 .705 8 3.425 0 2.721-3.686 3.401-8 3.401z"
                    fill={props.color}
                />
            </Svg>

        </View>
    );
}