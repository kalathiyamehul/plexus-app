import { View } from 'native-base';
import React from 'react';
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

export default function (props) {
    const { width = 15, height = 15 } = props;
    return (
        <View style={props.style}>
            <Svg
                viewBox={`0 0 ${width} ${height}`}
                width={width}
                height={height}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <G
                    clipPath="url(#clip0)"
                    stroke="#282E3A"
                    strokeWidth={1.37143}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <Path d="M16.752 13.343a1.371 1.371 0 01-1.371 1.371H3.038a1.371 1.371 0 01-1.371-1.371V5.8a1.371 1.371 0 011.37-1.371h2.744L7.152 2.37h4.115l1.37 2.058h2.744A1.371 1.371 0 0116.752 5.8v7.543z" />
                    <Path d="M9.21 11.971a2.743 2.743 0 100-5.485 2.743 2.743 0 000 5.485z" />
                </G>
                <Defs>
                    <ClipPath id="clip0">
                        <Path
                            fill="#fff"
                            transform="translate(.981 .314)"
                            d="M0 0H16.4571V16.4571H0z"
                            {...props}
                        />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
}