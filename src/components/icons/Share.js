import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function ShareIcon(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="#F9FAFF"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={32} height={32} rx={9.14286} fill="#edf1f8" />
      <Path
        d="M20.571 12.953a2.286 2.286 0 100-4.572 2.286 2.286 0 000 4.572zM11.428 18.286a2.286 2.286 0 100-4.572 2.286 2.286 0 000 4.572zM20.571 23.619a2.286 2.286 0 100-4.571 2.286 2.286 0 000 4.571zM13.402 17.15l5.204 3.033M18.598 11.817l-5.196 3.033"
        stroke="#49505A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ShareIcon
