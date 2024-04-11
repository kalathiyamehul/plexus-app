import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function NewNotification(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={13.5} cy={13.5} r={13.5} fill="#EEF1F6" />
      <Circle cx={21.5} cy={2.5} r={2.5} fill="#DF320C" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.75 13.5c0 3.45-2.8 6.25-6.25 6.25-3.456 0-6.25-2.8-6.25-6.25s2.794-6.25 6.25-6.25c3.45 0 6.25 2.8 6.25 6.25zm-5.7 2.37c0 .299-.25.55-.55.55a.55.55 0 01-.543-.55v-2.763c0-.3.243-.544.543-.544.3 0 .55.243.55.544v2.762zm-.556-5.295c.306 0 .55.25.55.55 0 .3-.244.544-.544.544a.545.545 0 01-.55-.544c0-.3.244-.55.544-.55z"
        fill="#75CDC7"
      />
    </Svg>
  )
}

export default NewNotification
