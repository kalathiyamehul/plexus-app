import { View } from 'native-base';
import React from 'react';
import Svg, { Circle, Path } from "react-native-svg";
import { theme } from '../../styles/theme';

export default function (props) {
    const { width = 15, height = 15 } = props;
    return (
        <View style={props.style}>

            <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Circle
                    cx={12}
                    cy={12}
                    r={9}
                    fill="#fff"
                    stroke={theme.colors.primary[500]}
                    strokeWidth={6}
                />
            </Svg>
        </View>
    );
}