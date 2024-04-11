import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function Activity(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.239 4.738a4.024 4.024 0 004.027 4.021c.245-.001.49-.025.73-.07v7.973c0 3.354-1.978 5.338-5.337 5.338H8.341c-3.367 0-5.346-1.984-5.346-5.338V9.355C2.996 6.002 4.975 4 8.342 4h7.967c-.047.243-.07.49-.07.738zm-2.093 10.159l2.858-3.688v-.018a.754.754 0 00-.14-1.045.73.73 0 00-1.038.15l-2.41 3.1-2.743-2.16a.74.74 0 00-1.047.14l-2.954 3.81a.72.72 0 00-.159.457.738.738 0 001.363.43l2.471-3.196 2.744 2.151a.74.74 0 001.055-.131z"
        fill={props.color}
      />
      <Circle opacity={0.4} cx={20.4961} cy={4.5} r={2.5} fill="#A8B1BD" />
    </Svg>
  )
}

export default Activity
