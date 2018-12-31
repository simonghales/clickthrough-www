// @flow
import React from 'react';
import type { Node } from 'react';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import styles from './styles';

type Props = {
  children: Node,
};

const CoreLayout = ({ children }: Props) => (
  <div>
    <SiteHeader />
    <main className={styles.mainClass}>{children}</main>
  </div>
);

export default CoreLayout;
