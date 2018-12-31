// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './styles';

type Props = {
  children: Node,
};

const Button = ({ children }: Props) => <div className={styles.buttonClass}>{children}</div>;

export default Button;
