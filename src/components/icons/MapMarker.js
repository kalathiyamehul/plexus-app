import { View } from 'native-base';
import React from 'react';
import Svg, { Ellipse, Path } from "react-native-svg";

export default function (props) {
    const { mb = 5, size = 15 } = props;
    return (
        <View style={props.style}>
            <Svg
                viewBox="0 0 12 12"
                style={[{ height: size, width: size, marginBottom: mb }, props.svgStyle]}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.266.468a3.445 3.445 0 013.517.03A3.665 3.665 0 017.5 3.63c-.025 1.27-.723 2.464-1.596 3.387a9.362 9.362 0 01-1.68 1.41.587.587 0 01-.203.072.41.41 0 01-.196-.06 9.258 9.258 0 01-2.419-2.273 4.64 4.64 0 01-.906-2.6c0-1.28.673-2.464 1.766-3.099zm.631 3.63c.184.452.618.748 1.099.748a1.17 1.17 0 00.841-.35c.224-.227.349-.536.348-.857a1.212 1.212 0 00-.731-1.122 1.173 1.173 0 00-1.297.26c-.341.346-.444.867-.26 1.32z"
                    fill={props.color}
                />
                <Ellipse
                    opacity={0.4}
                    cx={4.00006}
                    cy={9.5}
                    rx={2.5}
                    ry={0.5}
                    fill={props.color}
                />
            </Svg>
        </View>
    );
}