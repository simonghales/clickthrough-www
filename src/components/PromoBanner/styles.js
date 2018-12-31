// @flow

import { css } from 'emotion';
import { mobileMQ } from '../../styles/responsive';

const containerClass = css`
  height: 328px;
  background-color: #abc0cf;

  ${mobileMQ} {
    height: 210px;
  }
`;

export default {
  containerClass,
};
