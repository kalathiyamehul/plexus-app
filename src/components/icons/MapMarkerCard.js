import { View } from 'native-base';
import React from 'react';
import Svg, { Ellipse, Path, Rect } from "react-native-svg";

export default function (props) {
    const { mb = 5, size = 15 } = props;
    return (
        <View style={props.style}>
            <Svg
                width={42}
                height={42}
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Rect width={42} height={42} rx={10} fill="#E4E8EE" />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.109 13.448a5.741 5.741 0 015.862.048c1.786 1.11 2.872 3.091 2.861 5.222-.041 2.117-1.205 4.107-2.66 5.646-.84.892-1.779 1.68-2.799 2.35a.98.98 0 01-.34.12.684.684 0 01-.325-.1 15.431 15.431 0 01-4.032-3.789 7.733 7.733 0 01-1.51-4.333c-.001-2.135 1.122-4.106 2.943-5.164zm1.053 6.048a1.981 1.981 0 001.83 1.247 1.95 1.95 0 001.403-.584c.373-.378.581-.892.58-1.427a2.02 2.02 0 00-1.22-1.87 1.955 1.955 0 00-2.16.433 2.046 2.046 0 00-.433 2.2z"
                    fill="#1F2329"
                />
                <Ellipse
                    opacity={0.4}
                    cx={20.9997}
                    cy={28.5001}
                    rx={4.16667}
                    ry={0.833334}
                    fill="#1F2329"
                />
            </Svg>

        </View>
    );
}