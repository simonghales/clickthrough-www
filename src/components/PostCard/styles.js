// @flow

import { css } from 'emotion';
import colors from '../../styles/config/colors';
import units from '../../styles/config/units';
import { bodyTextCss } from '../../styles/typography';
import { displayFontFamilyCss, fancyHeadingFontFamilyCss } from '../../styles/config/fontFamilies';
import fontSizes from '../../styles/config/fontSizes';
import { mobileMQ } from '../../styles/responsive';

const containerClass = css``;

const cardWrapperClass = css`
  position: relative;
`;

const cardShadowClass = css`
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 3px;
  box-shadow: 0 2px 5px rgba(87, 143, 178, 0.28);
`;

const cardClass = css`
  background-color: ${colors.raw.white};
  padding: ${units.spacing.small}px;
  border-radius: ${units.radius.small}px;
  position: relative;
`;

const cardImageClass = css`
  height: 220px;
  background-color: rgba(221, 232, 238, 0.5);
  border-radius: ${units.radius.tiny}px;

  ${mobileMQ} {
    height: 160px;
  }
`;

const cardInfoClass = css`
  min-height: 104px;
  padding-bottom: ${units.spacing.tiny}px;
`;

const cardTitleWrapperClass = css`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const cardTitleClass = css`
  ${fancyHeadingFontFamilyCss};
  color: ${colors.raw.dark};
  font-weight: 700;
  font-size: ${fontSizes.medium}px;
  background-color: ${colors.raw.white};
  padding: 10px 20px;
  margin-top: -22px;
`;

const placeholderCardTitleClass = css`
  &::after {
    content: '...loading...';
    color: transparent;
    background-color: ${colors.placeholderShade};
  }
`;

const cardDescriptionClass = css`
  ${bodyTextCss};
  ${displayFontFamilyCss};
  color: ${colors.raw.mediumDark};
  line-height: 1.4;
  max-width: 290px;
  margin: 4px auto 0 auto;
`;

const placeholderCardDescriptionClass = css`
  &::after {
    content: '...loading..... ............. ............... .............. ........ ..... \\A ..............................';
    white-space: pre;
    color: transparent;
    background-color: ${colors.placeholderShade};
  }
`;

const footerClass = css`
  margin-top: ${units.spacing.tiny}px;
  padding: 0 ${units.spacing.small}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default {
  cardClass,
  cardWrapperClass,
  cardShadowClass,
  cardImageClass,
  cardInfoClass,
  cardTitleWrapperClass,
  cardTitleClass,
  placeholderCardTitleClass,
  cardDescriptionClass,
  placeholderCardDescriptionClass,
  footerClass,
};
