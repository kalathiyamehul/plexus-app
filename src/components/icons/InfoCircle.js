import { View } from 'native-base';
import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function (props) {
    const { mb = 5, size = 15 } = props;
    return (
        <View style={props.style}>
            <Svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={[{ height: size, width: size, marginBottom: mb }, props.svgStyle]}
                >
                <Path
                    d="M7 .333a6.667 6.667 0 110 13.333A6.667 6.667 0 017 .333zM7.667 5V3.667H6.333V5h1.334zm0 5.333v-4H6.333v4h1.334z"
                    fill="#A8B1BD"
                />
                </Svg>
        </View>
    );
}