import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import { theme } from "../../styles/theme"

function BookmarkActivity(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={12} fill={theme.colors.primary[500]} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.192 6.167h3.599c1.58 0 2.858.624 2.876 2.21v8.856c0 .099-.024.198-.07.285a.604.604 0 01-.362.292.583.583 0 01-.46-.058l-3.78-1.89-3.787 1.89a.62.62 0 01-.286.076.593.593 0 01-.589-.595V8.377c0-1.586 1.284-2.21 2.859-2.21zm-.397 4.445h4.392c.251 0 .455-.205.455-.461a.457.457 0 00-.455-.461H9.795a.457.457 0 00-.455.46c0 .257.204.462.455.462z"
        fill="#fff"
      />
    </Svg>
  )
}

export default BookmarkActivity
