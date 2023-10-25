import React from 'react';
import styles from '@css/app/footer.module.css';

function AppFooter({ humidity, dewpoint }) {
  return (
    <footer className={styles['app-footer']}>
        <div className={styles['footer-container']}>
            <div className={styles['footer-item']}>
                Humidity: {humidity}%
            </div> 
            <div className={styles['footer-item']}>
                Dewpoint: {dewpoint}°F
            </div>
        </div>
    </footer>
  );
}

export default AppFooter;
