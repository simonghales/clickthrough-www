// @flow
import { injectGlobal } from 'emotion';
import { resetCss } from './config/reset';
import { defaultFontFamilyCss } from './config/fontFamilies';
import colors from './config/colors';
import { bodyTextCss } from './typography';

export default injectGlobal`
  ${resetCss};
  
  * {
    box-sizing: border-box;
  }

  body {
    ${defaultFontFamilyCss};
    background-color: ${colors.siteBg};
    ${bodyTextCss};
  }
`;
