import React from 'react';
import styles from '@css/app/header.module.css';
import WeathermanLogo from '@images/logos/logo.svg';
import '@scripts/clock.js';

function AppHeader({ pageTitle }) {
  return (
    <header className={styles['app-header']}>
        <div className={styles['header-container']}>
            <div className={styles['header-item']}>
                <div>
                    <img className={styles['logo']} src={WeathermanLogo} alt="Weather Logo" />
                </div>
                <div>
                    <div> Salt Lake City's </div>
                    <div> {pageTitle} </div>
                </div>

            </div>

            <div className={styles['header-item']}>
                <div className={styles['clock']}>
                    <div id="time">00:00:00 AM</div>
                    <div id="date">SUN JAN 1</div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default AppHeader;
