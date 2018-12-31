// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './styles';

type Props = {
  children: Node,
};

const Text = ({ children }: Props) => <p className={styles.textClass}>{children}</p>;

export default Text;

export const PlaceholderText = (props: Props) => (
  <Text {...props} placeholder>
    {' '}
  </Text>
);
