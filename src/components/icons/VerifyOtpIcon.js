import * as React from "react"
import Svg, { Circle, G, Rect, Path, Defs } from "react-native-svg"
import { theme } from "../../styles/theme"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const VerifyOtpIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={94}
    height={94}
    fill="none"
    {...props}
  >
    <Circle cx={47} cy={47} r={47} fill="#EEF0FF" />
    <G filter="url(#a)">
      <Rect
        width={36.707}
        height={56.59}
        x={28.293}
        y={19}
        fill={theme.colors.primary[500]}
        rx={4.588}
      />
      <Rect
        width={35.177}
        height={55.06}
        x={29.058}
        y={19.765}
        stroke="#fff"
        rx={3.824}
      />
    </G>
    <G filter="url(#b)">
      <Rect
        width={27.53}
        height={27.53}
        x={23.704}
        y={28.177}
        fill="#18E1B2"
        rx={3.441}
      />
    </G>
    <Path stroke="#fff" d="M27.75 34.25h19.5" />
    <Circle cx={29} cy={41} r={2} fill="#fff" />
    <Circle cx={35} cy={41} r={2} fill="#fff" />
    <Circle cx={41} cy={41} r={2} fill="#fff" />
    <Circle cx={47} cy={41} r={2} fill="#fff" />
    <Defs></Defs>
  </Svg>
)

export default VerifyOtpIcon
