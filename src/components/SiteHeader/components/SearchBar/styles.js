// @flow

import { css } from 'emotion';
import units from '../../../../styles/config/units';
import colors from '../../../../styles/config/colors';

const height = 36;

const containerClass = css`
  position: relative;
`;

const iconClass = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  width: ${height}px;
  justify-content: center;
  color: ${colors.raw.lightDark};
`;

const inputClass = css`
  position: relative;
  border-radius: ${units.radius.small}px;
  background-color: #f2f5f7;
  border: 1px solid #e8eef2;
  height: ${height}px;
  line-height: 27px;
  padding: 4px 8px 4px ${height}px;
  color: ${colors.raw.faintDark};
`;

export default {
  containerClass,
  iconClass,
  inputClass,
};
