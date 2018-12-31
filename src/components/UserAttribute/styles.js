// @flow

import { css } from 'emotion';
import units from '../../styles/config/units';
import { displayFontFamilyCss } from '../../styles/config/fontFamilies';
import { bodyTextCss } from '../../styles/typography';
import colors from '../../styles/config/colors';

const containerClass = css`
  display: flex;
  align-items: center;
`;

const imageClass = css`
  width: 26px;
  height: 26px;
  background-color: rgba(179, 197, 209, 0.27);
  border-radius: 50%;
  margin-right: ${units.spacing.tiny}px;
`;

const placeholderImageClass = css`
  background-color: ${colors.placeholderShade};
`;

const nameClass = css`
  ${displayFontFamilyCss};
  ${bodyTextCss};
  color: ${colors.raw.faintDark};
`;

const placeholderNameClass = css`
  &::after {
    content: '...loading...';
    color: transparent;
    background-color: ${colors.placeholderShade};
  }
`;

export default {
  containerClass,
  imageClass,
  placeholderImageClass,
  nameClass,
  placeholderNameClass,
};
