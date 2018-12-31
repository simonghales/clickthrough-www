// @flow

import breakpoints from './config/breakpoints';

export const desktopMQ = `@media only screen and (min-width: ${breakpoints.desktop}px)`;

export const mobileMQ = `@media only screen and (max-width: ${breakpoints.mobile}px)`;
