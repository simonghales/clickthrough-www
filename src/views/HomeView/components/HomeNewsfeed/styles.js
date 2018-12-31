// @flow

import { css } from 'emotion';
import { maxWidthContentCss } from '../../../../styles/shared/layout';
import units from '../../../../styles/config/units';

const containerClass = css`
  ${maxWidthContentCss};
  margin-top: -${units.spacing.medium}px;
`;

export default {
  containerClass,
};
