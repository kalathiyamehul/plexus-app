import * as React from 'react';
import Svg, {Circle, Path, SvgXml} from 'react-native-svg';
import { theme } from '../../styles/theme';

function CustomerHelp(props) {
  const xml = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="20" fill="${theme.colors.primary[500]}"/>
  <path d="M16 23C16 21.8954 15.1046 21 14 21C12.8954 21 12 21.8954 12 23V25C12 26.1046 12.8954 27 14 27C15.1046 27 16 26.1046 16 25V23Z" stroke="#DCF3F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28 23C28 21.8954 27.1046 21 26 21C24.8954 21 24 21.8954 24 23V25C24 26.1046 24.8954 27 26 27C27.1046 27 28 26.1046 28 25V23Z" stroke="#DCF3F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 23V20C12 17.8782 12.8429 15.8434 14.3431 14.3431C15.8434 12.8428 17.8783 12 20 12C22.1217 12 24.1566 12.8428 25.6569 14.3431C27.1571 15.8434 28 17.8782 28 20V23" stroke="#DCF3F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26 27C26 27.7956 25.3679 28.5587 24.2426 29.1213C23.1174 29.6839 21.5913 30 20 30" stroke="#DCF3F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  return <SvgXml xml={xml} {...props} />;
}

export default CustomerHelp;
