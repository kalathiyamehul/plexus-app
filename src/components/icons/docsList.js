import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { theme } from "../../styles/theme"

function DocsList(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={32}
        height={32}
        rx={4.87805}
        fill={theme.colors.primary[500]} />
      <Path
        d="M8.302 17.712c0-.808.655-1.463 1.464-1.463h1.73v8.585H8.301v-7.122z"
        fill="#fff"
        fillOpacity={0.5}
      />
      <Path
        d="M11.495 24.834v-2.483c-.262 1.849-1.064 2.3-3.193 2.483h3.193z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.958 7.096c-.808 0-1.463.655-1.463 1.463v16.275h10.811c.808 0 1.464-.655 1.464-1.463V8.559c0-.808-.656-1.463-1.464-1.463h-9.348zm.878 3.477a.639.639 0 100 1.277h7.592a.639.639 0 100-1.277h-7.592zm-.639 3.264c0-.353.286-.639.64-.639h7.591a.639.639 0 110 1.278h-7.592a.639.639 0 01-.639-.639zm.64 1.986a.639.639 0 100 1.278H17.1a.639.639 0 100-1.277h-3.264z"
        fill="#fff"
      />
    </Svg>
  )
}

export default DocsList
