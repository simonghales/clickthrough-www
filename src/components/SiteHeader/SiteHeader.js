// @flow
import React from 'react';
import styles from './styles';
import SiteLogo from './components/SiteLogo/SiteLogo';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../Button/Button';

const SiteHeader = () => (
  <header className={styles.headerClass}>
    <div className={styles.contentClass}>
      <div className={styles.sideBlockClass}>
        <SiteLogo />
      </div>
      <div className={styles.middleBlockClass}>
        <SearchBar />
      </div>
      <div className={styles.sideBlockClass}>
        <Button>Register</Button>
      </div>
    </div>
  </header>
);

export default SiteHeader;
