// @flow

import { css } from 'emotion';
import { displayFontFamilyCss } from '../../styles/config/fontFamilies';

const buttonClass = css`
  ${displayFontFamilyCss};
  color: #6a8595;
  border: 2px solid rgba(106, 133, 149, 0.5);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
  cursor: pointer;

  &:hover {
    background-color: rgba(106, 133, 149, 0.05);
  }

  &:active {
    background-color: rgba(106, 133, 149, 0.1);
  }
`;

export default {
  buttonClass,
};
