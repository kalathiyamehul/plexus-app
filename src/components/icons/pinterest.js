import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function SvgComponent(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.378 21.854c-.58 1.064-.6 2.467.016 3.699a1 1 0 11-1.788.894c-.885-1.768-.903-3.865.016-5.55C20.564 19.168 22.421 18 25 18c1.957 0 3.442.882 4.37 2.17.905 1.258 1.254 2.864 1.084 4.35-.17 1.486-.878 2.965-2.224 3.855-1.15.759-2.629 1.002-4.355.61l-.912 3.283a1 1 0 11-1.927-.536l1.18-4.245a.695.695 0 01.005-.02l1.316-4.735a1 1 0 111.927.536l-1.053 3.788c1.251.265 2.129.038 2.716-.35.743-.491 1.22-1.37 1.34-2.414.12-1.045-.136-2.142-.721-2.954C27.183 20.555 26.293 20 25 20c-1.92 0-3.064.831-3.622 1.854z"
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

export default SvgComponent
