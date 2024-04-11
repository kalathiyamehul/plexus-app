import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MapPin(props) {
  return (
    <Svg
      width={60}
      height={66}
      viewBox="0 0 60 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_dd)">
        <Rect x={12} y={6} width={36} height={36} rx={12.8571} fill="#1F2329" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.917 22.598c0-3.833 3.203-6.931 7.078-6.931 3.885 0 7.088 3.098 7.088 6.931 0 1.932-.702 3.725-1.858 5.245a18.387 18.387 0 01-4.618 4.284c-.405.265-.77.285-1.215 0a18.031 18.031 0 01-4.616-4.284c-1.158-1.52-1.86-3.313-1.86-5.245zm4.745.216c0 1.284 1.048 2.294 2.333 2.294 1.285 0 2.343-1.01 2.343-2.294 0-1.274-1.058-2.333-2.343-2.333a2.345 2.345 0 00-2.333 2.333z"
          fill="#fff"
        />
        <Path
          d="M30.7 47.036a.643.643 0 01-1.114 0l-3.216-5.572a.643.643 0 01.556-.964h6.433c.495 0 .805.536.557.964L30.7 47.036z"
          fill="#1F2329"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default MapPin
