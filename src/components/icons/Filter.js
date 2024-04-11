import { View } from 'native-base';
import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function (props) {
    const { size = 15 } = props;
    return (
        <View style={props.style}>
            <Svg
                style={[{ height: size, width: size }, props.svgStyle]}
                viewBox="0 0 46 46"
            >
                <Path
                    d="M14 0h18c7.7 0 14 6.3 14 14v18c0 7.7-6.3 14-14 14H14C6.3 46 0 39.7 0 32V14C0 6.3 6.3 0 14 0z"
                    fill={props.color}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.3 28c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3zm-1.2 4c1.7 0 3.2-1.1 3.8-2.7h4.7c.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4h-4.7c-.6-1.5-2.1-2.7-3.8-2.7-2.2 0-4 1.8-4 4-.1 2.4 1.7 4.2 4 4.2zm4.6-14c0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.6-1.3-1.3-1.3-.7 0-1.3.6-1.3 1.3zm1.2 4.1c-1.7 0-3.2-1.1-3.8-2.7h-4.7c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4h4.7c.6-1.5 2.1-2.7 3.8-2.7 2.2 0 4 1.8 4 4 .1 2.4-1.7 4.2-4 4.2z"
                    fill="#fff"
                />
            </Svg>
        </View>
    );
}