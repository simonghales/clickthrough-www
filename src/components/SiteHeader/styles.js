// @flow
import { css } from 'emotion';
import colors from '../../styles/config/colors';
import { maxWidthContentCss } from '../../styles/shared/layout';
import zindex from '../../styles/config/zindex';
import { mobileMQ } from '../../styles/responsive';

export const HEADER_HEIGHT = 60;

const headerClass = css`
  background-color: ${colors.headerBg};
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  z-index: ${zindex.header};
`;

const contentClass = css`
  ${maxWidthContentCss};
  display: flex;
  align-items: center;
  height: 100%;
`;

const sideBlockClass = css`
  flex: 1;

  &:last-of-type {
    display: flex;
    justify-content: flex-end;
  }
`;

const middleBlockClass = css`
  width: 100%;
  max-width: 520px;

  ${mobileMQ} {
    display: none;
  }
`;

export default {
  headerClass,
  contentClass,
  sideBlockClass,
  middleBlockClass,
};
