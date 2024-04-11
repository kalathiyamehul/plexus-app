import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function Facebook(props) {
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
        d="M24.5 32a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        fill="#777E91"
      />
      <Path
        d="M24.5 22a1 1 0 011-1h1a1 1 0 100-2h-1a3 3 0 00-3 3v2h-1a1 1 0 100 2h1v6a1 1 0 102 0v-6h2a1 1 0 100-2h-2v-2z"
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

export default Facebook
