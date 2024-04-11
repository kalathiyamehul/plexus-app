import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const LeaveReviewSmallIcon = props => (
  <Svg width={18} height={18} fill="none" {...props}>
    <G fill="#E8664D">
      <Path
        d="M17.623 8.954a8.642 8.642 0 1 0-17.285 0 8.642 8.642 0 0 0 17.285 0z"
        opacity={0.3}
      />
      <Path d="M3.94 11.162a.864.864 0 1 1 1.438-.96c1 1.5 2.18 2.209 3.603 2.209 1.422 0 2.602-.708 3.602-2.208a.865.865 0 1 1 1.438.959c-1.305 1.957-3.006 2.977-5.04 2.977-2.035 0-3.736-1.02-5.04-2.977z" />
    </G>
  </Svg>
);

const LeaveReviewLargeIcon = props => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      fill="#E8664D"
      d="M30 15c0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15z"
      opacity={0.3}
    />
    <Path
      fill="#E8664D"
      d="M6.252 18.832a1.5 1.5 0 1 1 2.496-1.664C10.484 19.771 12.532 21 15 21s4.517-1.229 6.252-3.832a1.5 1.5 0 1 1 2.496 1.664C21.484 22.23 18.532 24 15 24c-3.532 0-6.484-1.77-8.748-5.168z"
    />
  </Svg>
);

export {LeaveReviewSmallIcon, LeaveReviewLargeIcon};
