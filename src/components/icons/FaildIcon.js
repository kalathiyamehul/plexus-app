import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function TransactionFaild(props) {
  return (
    <Svg
      width={150}
      height={150}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_4702_63185)">
        <Rect
          x={32}
          y={28}
          width={86}
          height={86}
          rx={41.9512}
          fill="#FF5252"
        />
        <Path
          d="M75 89.333c-10.125 0-18.333-8.207-18.333-18.333 0-10.125 8.208-18.333 18.333-18.333 10.126 0 18.333 8.208 18.333 18.333 0 10.126-8.207 18.333-18.333 18.333zm0-3.666a14.667 14.667 0 100-29.334 14.667 14.667 0 000 29.334zM73.167 76.5h3.666v3.667h-3.666V76.5zm0-14.667h3.666v11h-3.666v-11z"
          fill="#DCF3F1"
        />
        <Rect
          x={28.8537}
          y={24.8537}
          width={92.2927}
          height={92.2927}
          rx={45.0976}
          stroke="#FF5252"
          strokeOpacity={0.19}
          strokeWidth={6.29268}
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default TransactionFaild
