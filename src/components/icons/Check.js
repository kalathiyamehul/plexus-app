import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Check(props) {
  return (
    <Svg
      width={112}
      height={112}
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d)">
        <Rect
          x={24}
          y={21}
          width={64}
          height={64}
          rx={31.2195}
          fill="#0AC295"
        />
        <Path
          d="M68.487 43.634l-17.17 17.171L43.512 53"
          stroke="#fff"
          strokeWidth={3.90244}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect
          x={21.6585}
          y={18.6585}
          width={68.6829}
          height={68.6829}
          rx={33.561}
          stroke="#31AC94"
          strokeOpacity={0.18}
          strokeWidth={4.68293}
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default Check
