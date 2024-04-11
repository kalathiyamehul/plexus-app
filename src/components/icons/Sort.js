import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Sort(props) {
  return (
    <Svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.4}
        d="M8.083 12.958H1.508c-.832 0-1.508.664-1.508 1.481 0 .817.676 1.482 1.508 1.482h6.575c.833 0 1.508-.665 1.508-1.482s-.675-1.481-1.508-1.481zM20 3.379c0-.817-.676-1.48-1.507-1.48h-6.575c-.832 0-1.508.663-1.508 1.48s.676 1.48 1.508 1.48h6.575c.831 0 1.507-.663 1.507-1.48z"
        fill={props?.primaryColor}
      />
      <Path
        d="M6.878 3.379c0 1.866-1.54 3.38-3.44 3.38C1.54 6.758 0 5.244 0 3.378 0 1.513 1.54 0 3.439 0c1.9 0 3.439 1.513 3.439 3.379zM20 14.4c0 1.865-1.539 3.378-3.439 3.378-1.899 0-3.439-1.513-3.439-3.379s1.54-3.38 3.44-3.38S20 12.534 20 14.4z"
        fill={props?.primaryColor}
      />
    </Svg>
  )
}

export default Sort
