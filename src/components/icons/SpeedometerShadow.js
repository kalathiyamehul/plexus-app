import * as React from "react"
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg"

export default function (props) {
  return (
    <Svg
      width={205}
      height={9}
      viewBox="0 0 205 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M102.5 9C159.109 9 205 6.985 205 4.5S159.109 0 102.5 0C45.89 0 0 2.015 0 4.5S45.89 9 102.5 9z"
        fill="url(#paint0_radial)"
        fillOpacity={0.73}
      />
      <Defs>
        <RadialGradient
          id="paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(95.0201 0 0 3.27073 102.5 4.214)"
        >
          <Stop stopColor="#C1D6E3" />
          <Stop offset={1} stopColor="#fff" />
        </RadialGradient>
      </Defs>
    </Svg>
  )
}