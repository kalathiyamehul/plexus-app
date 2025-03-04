import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function Twitter(props) {
  return (
    <Svg
      width={49}
      height={48}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.68 26c-1.653.005-2.72 1.888-1.702 3.316C15.438 31.36 18.083 33 22.5 33c6.845 0 12.34-5.578 11.57-12.169l1.127-2.254c.782-1.563-.576-3.34-2.29-2.998l-1.488.298a7.45 7.45 0 00-1.153-.48C29.586 15.175 28.762 15 28 15c-1.37 0-2.551.351-3.49 1.056-.929.697-1.452 1.612-1.739 2.453-.132.388-.22.776-.277 1.15a10.094 10.094 0 01-1.603-.668c-1.203-.623-2.176-1.413-2.725-2.105-.92-1.163-2.872-1.076-3.557.434-.965 2.13-.7 4.654.167 6.693.29.683.67 1.36 1.131 1.985l-.226.002zm6.82 5c-3.863 0-5.861-1.4-6.894-2.846a.097.097 0 01.08-.154c1.051-.003 3.208-.053 4.63-.886.074-.043.058-.151-.023-.178-3.316-1.115-5.2-5.837-3.863-8.79a.099.099 0 01.168-.018c1.53 1.93 4.872 3.82 7.78 3.87a.102.102 0 00.102-.118C24.362 21.12 23.915 17 28 17c.976 0 2.427.476 2.962.963a.105.105 0 00.09.026l2.248-.449a.1.1 0 01.109.143l-1.394 2.787a.102.102 0 00-.01.063C32.983 26.02 28.489 31 22.5 31z"
        fill="#777E91"
      />
      <Rect
        x={1.5}
        y={1}
        width={46}
        height={46}
        rx={23}
        stroke="#E6E8EC"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Twitter
