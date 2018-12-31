// @flow

import { css } from 'emotion';
import units from '../../styles/config/units';
import { desktopMQ, mobileMQ } from '../../styles/responsive';

const containerClass = css`
  display: flex;
  flex-wrap: wrap;
`;

const postClass = css`
  margin-bottom: ${units.spacing.large}px;

  ${desktopMQ} {
    width: calc(33.33% - 10px);
    margin-right: 15px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  ${mobileMQ} {
    width: 100%;
  }
`;

export default {
  containerClass,
  postClass,
};
