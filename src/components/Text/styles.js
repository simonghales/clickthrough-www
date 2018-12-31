// @flow

import { css } from 'emotion';
import { smallTextCss } from '../../styles/typography';
import colors from '../../styles/config/colors';

const textClass = css`
  ${smallTextCss};
  color: ${colors.raw.faintDark};
`;

export default {
  textClass,
};
