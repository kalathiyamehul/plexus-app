import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"

function Trending(props) {
  return (
    <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={15.5} cy={15.5} r={15.5} fill="#EEF1F6" />
      <G clipPath="url(#clip0_4807_65074)">
        <Path
          d="M18.853 11.32l1.726 1.725-3.677 3.677-3.014-3.014-5.583 5.59 1.062 1.063 4.521-4.52 3.014 3.013 4.747-4.74 1.725 1.726v-4.52h-4.52z"
          fill="#0AC295"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4807_65074">
          <Path
            fill="#fff"
            transform="translate(6.798 6.799)"
            d="M0 0H18.0833V18.0833H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Trending
