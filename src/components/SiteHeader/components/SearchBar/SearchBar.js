// @flow
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './styles';

const SearchBar = () => (
  <div className={styles.containerClass}>
    <div className={styles.inputClass}>Search</div>
    <div className={styles.iconClass}>
      <FaSearch />
    </div>
  </div>
);

export default SearchBar;
