import React from 'react';
import styles from '@css/app/footer.module.css';

function AppFooter() {
  return (
    <footer className={styles['app-footer']}>
        <div className={styles['footer-container']}>
            <div className={styles['footer-item']}>
                Humidity: 63%
            </div> 
            <div className={styles['footer-item']}>
                Dewpoint: 70°F
            </div>
        </div>
    </footer>
  );
}

export default AppFooter;
