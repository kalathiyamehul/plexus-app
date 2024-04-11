import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Protected(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={20} cy={20} r={20} fill="#F4F7FE" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.683 31.566a.89.89 0 00.836-.005l4.163-2.225c1.18-.63 2.105-1.333 2.826-2.152a9.62 9.62 0 002.409-6.411l-.05-7.747a2.11 2.11 0 00-1.457-1.978l-7.744-2.599a2.204 2.204 0 00-1.435.008l-7.715 2.691a2.114 2.114 0 00-1.432 1.997l.049 7.741c.015 2.352.9 4.62 2.495 6.386.728.808 1.66 1.501 2.854 2.12l4.2 2.174zM18.58 22.46c.174.167.4.25.625.247a.887.887 0 00.621-.255l4.55-4.484a.842.842 0 00-.008-1.213.898.898 0 00-1.246.007l-3.93 3.874-1.61-1.547a.898.898 0 00-1.245.008.841.841 0 00.008 1.213l2.235 2.15z"
        fill="#0AC295"
      />
    </Svg>
  )
}

export default Protected
