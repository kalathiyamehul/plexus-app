import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function Instagram(props) {
  return (
    <Svg
      width={49}
      height={48}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5 16h-8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4v-8a4 4 0 00-4-4zm-8-2a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6v-8a6 6 0 00-6-6h-8z"
        fill="#777E91"
      />
      <Path d="M29.5 20a1 1 0 100-2 1 1 0 000 2z" fill="#777E91" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.5 24a5 5 0 11-10 0 5 5 0 0110 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0z"
        fill="#777E91"
      />
      <Rect
        x={1.5}
        y={1}
        width={46}
        height={46}
        rx={23}
        stroke="#E6E8EC"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Instagram
