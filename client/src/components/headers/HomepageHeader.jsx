import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@css/homepage/header.module.css';
import WeathermanLogo from '@images/logos/logo.svg';

function HomepageHeader() {
  return (
    <header className={styles['homepage-header']}>
      <div className={styles['header-container']}>
        <div className={styles['logo']}>
          <Link to="/">
            <img className={styles['logo-image']} src={WeathermanLogo} alt="Weather Logo" />
          </Link>
        </div>
        <div className={styles['header-links']}>
          <button className={styles['about-button']}>About</button> {' '}

          <Link to="/Login">
            <button className={styles['signin-button']}>Sign in</button>
          </Link>
        </div>
      </div>
      <div className={styles['header-text']}>WEATHERSTAR 2084</div>
    </header>
  );
}

export default HomepageHeader;
