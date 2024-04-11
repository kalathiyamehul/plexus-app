import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
import { theme } from "../../styles/theme"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function MapSelectedPin(props) {
  return (
    <Svg
      width={78}
      height={85}
      viewBox="0 0 78 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_dd)">
        <Rect
          x={16}
          y={8}
          width={46.2857}
          height={46.2857}
          rx={16.5306}
          fill={theme.colors.primary[500]}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.036 29.34c0-4.928 4.118-8.911 9.1-8.911 4.996 0 9.114 3.983 9.114 8.911 0 2.484-.903 4.79-2.39 6.744a23.643 23.643 0 01-5.937 5.508c-.52.34-.99.366-1.562 0a23.186 23.186 0 01-5.935-5.508c-1.488-1.954-2.39-4.26-2.39-6.744zm6.1.278c0 1.65 1.348 2.95 3 2.95 1.653 0 3.013-1.3 3.013-2.95 0-1.638-1.36-3-3.013-3-1.652 0-3 1.362-3 3z"
          fill="#fff"
        />
        <Path
          d="M40.042 60.76a.827.827 0 01-1.431 0l-4.136-7.163a.827.827 0 01.716-1.24h8.271a.827.827 0 01.716 1.24l-4.136 7.163z"
          fill={theme.colors.primary[500]}
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default MapSelectedPin
