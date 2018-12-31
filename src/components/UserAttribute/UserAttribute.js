// @flow
import React from 'react';
import { cx } from 'emotion';
import styles from './styles';

type Props = {
  placeholder?: boolean,
  name: string,
};

const UserAttribute = ({ placeholder, name }: Props) => (
  <div className={styles.containerClass}>
    <div
      className={cx(styles.imageClass, {
        [styles.placeholderImageClass]: placeholder,
      })}
    />
    <div
      className={cx(styles.nameClass, {
        [styles.placeholderNameClass]: placeholder,
      })}
    >
      {name}
    </div>
  </div>
);

UserAttribute.defaultProps = {
  placeholder: false,
};

export default UserAttribute;

export const UserAttributePlaceholder = () => <UserAttribute name="" placeholder />;
