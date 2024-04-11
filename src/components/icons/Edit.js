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
                    opacity={0.4}
                    d="M16.66 15.794h-4.745a.847.847 0 00-.84.853c0 .471.377.853.84.853h4.745c.463 0 .84-.382.84-.853a.847.847 0 00-.84-.853z"
                    {...props}
                />
                <Path
                    d="M8.59 5.753l4.497 3.634a.258.258 0 01.043.357L7.799 16.69a1.75 1.75 0 01-1.358.681l-2.91.036a.332.332 0 01-.326-.26l-.662-2.875c-.115-.529 0-1.075.335-1.496l5.357-6.98a.25.25 0 01.356-.043z"
                    {...props}
                />
                <Path
                    opacity={0.4}
                    d="M15.1 7.221l-.866 1.082a.248.248 0 01-.353.04c-1.054-.852-3.752-3.04-4.501-3.647a.257.257 0 01-.036-.36l.836-1.038c.758-.977 2.081-1.066 3.148-.215l1.226.976c.502.394.838.914.952 1.46.133.601-.009 1.192-.405 1.702z"
                    {...props}
                />
            </Svg>
        </View>
    );
}