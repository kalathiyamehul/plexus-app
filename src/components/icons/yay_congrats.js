import * as React from "react"
import Svg, {
  Circle,
  Mask,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CongratsIcon(props) {
  return (
    <Svg
      width={83}
      height={90}
      viewBox="0 0 83 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={41.5001} cy={48.8803} r={40.9802} fill="#E2E9F9" />
      <Circle cx={41.5001} cy={48.8803} r={40.9802} fill="#E2E9F9" />
      <Mask maskUnits="userSpaceOnUse" x={0} y={7} width={83} height={83}>
        <Circle cx={41.5001} cy={48.8803} r={40.9802} fill="#E2E9F9" />
      </Mask>
      <Mask
        id="a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={7}
        width={83}
        height={83}
      >
        <Circle cx={41.5001} cy={48.8803} r={40.9802} fill="#E2E9F9" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M15.003 64.215L8.718 71.39 7.252 73.08.129 63.16l3.143-6.964 1.885-4.854c1.508-3.376 7.193-3.798 9.846-3.587l13.617 2.11-2.304 15.405-11.313-1.055z"
          fill="#CBDCFF"
        />
      </G>
      <Mask
        id="b"
        maskUnits="userSpaceOnUse"
        x={0}
        y={7}
        width={83}
        height={83}
      >
        <Circle cx={41.5001} cy={48.8803} r={40.9802} fill="#E2E9F9" />
      </Mask>
      <G mask="url(#b)">
        <Path
          d="M65.04 22.077l13.682 2.855 3.206.655-1.774 17.225-10.074 1.19-6.691 1.237c-4.868.597-11.434-6.688-14.109-10.405l-12.74-19.87L53.785 6.11 65.04 22.077z"
          fill="#CBDCFF"
        />
      </G>
      <Mask
        id="c"
        maskUnits="userSpaceOnUse"
        x={0}
        y={7}
        width={83}
        height={83}
      >
        <Circle cx={41.5001} cy={48.8803} r={40.9802} fill="#E2E9F9" />
      </Mask>
      <G mask="url(#c)">
        <Path
          d="M33.084 76.391L29.42 66.118l-.868-2.402 12.826-4.652 5.007 6.444 3.64 4.128c2.434 3.106.04 10.048-1.461 13.13l-8.671 15.42-13.357-8.714 6.547-13.08z"
          fill="#CBDCFF"
        />
        <Path
          d="M52.027 56.605h-.12l-2.656-.1-1.971 1.797a3.334 3.334 0 01-3.514.623l-2.46-1.015-2.461 1.015a3.334 3.334 0 01-3.513-.622l-1.972-1.799-2.655.102h-.12c-1.248 0-2.381-.69-2.965-1.806l-1.24-2.373-.1-.034v20.939c0 1.258 1.314 2.076 2.427 1.508l11.854-6.004a1.691 1.691 0 011.509 0l11.834 6.01c1.113.568 2.427-.25 2.427-1.507V52.4l-.1.034-1.24 2.373a3.335 3.335 0 01-2.964 1.798z"
          fill="url(#paint0_linear)"
        />
        <G filter="url(#filter0_d)">
          <Circle
            cx={41.5003}
            cy={39.9042}
            r={22.2464}
            fill="url(#paint1_linear)"
          />
        </G>
        <Circle cx={41.4987} cy={41.0751} r={16.7824} fill="#D4650D" />
        <Circle
          cx={41.499}
          cy={39.9037}
          r={16.7824}
          fill="url(#paint2_linear)"
        />
        <Path
          d="M47.97 35.588l-8.897 8.897-4.044-4.044"
          stroke="#fff"
          strokeWidth={4.74194}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx={12.2286} cy={41.0752} r={2.34172} fill="#FF6FA4" />
        <Circle cx={68.4294} cy={28.1955} r={2.34172} fill="#FF6FA4" />
        <Path
          d="M69.533 42.314a.887.887 0 01.504-1.148 5.621 5.621 0 017.273 3.188.887.887 0 01-1.652.645 3.846 3.846 0 00-4.976-2.181.887.887 0 01-1.149-.504z"
          fill="#00DBE7"
        />
      </G>
      <Path
        d="M63.358 19.645a1.588 1.588 0 01-1.281-1.845c.981-5.459 6.222-9.101 11.68-8.12a1.588 1.588 0 01-.562 3.127 6.89 6.89 0 00-7.992 5.556 1.588 1.588 0 01-1.845 1.282z"
        fill="#FF6E3A"
      />
      <Path
        d="M27.18 1.519A1.588 1.588 0 0129.164.465c5.303 1.625 8.297 7.26 6.672 12.564a1.588 1.588 0 11-3.037-.93 6.89 6.89 0 00-4.565-8.596 1.588 1.588 0 01-1.054-1.984z"
        fill="#1560FF"
      />
      <Path
        d="M10.821 25.33c2.342-.625.398-2.095 0-2.342-.397-.247-1.258.105-1.756-.39-.738-.737-.534-2.098.352-2.647.733-.454 1.566-.294 2.185.305.612.592.195 1.17.39 2.146s1.757.586 1.952.195c.195-.39.39-2.146-.39-3.512-.625-1.093-1.852-1.485-2.789-1.56-1.675-.136-2.906.358-3.774 2.156-1.121 2.322.903 6.429 3.83 5.648z"
        fill="#FF6FA4"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={41.5006}
          y1={62.3457}
          x2={41.3055}
          y2={75.03}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E89A32" />
          <Stop offset={1} stopColor="#F7832A" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={41.5003}
          y1={17.6578}
          x2={41.5003}
          y2={62.1505}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFF296" />
          <Stop offset={1} stopColor="#FFDA36" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={41.499}
          y1={23.1214}
          x2={41.499}
          y2={56.6861}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBA43" />
          <Stop offset={1} stopColor="#FA8A2A" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default CongratsIcon
