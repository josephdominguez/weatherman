import React from 'react';
import styles from '@css/app/card_container.module.css';

function LoadingComponent() {
  return (
    <div className={`${styles['card-container']}`}>
        <div className={styles['card-item']}>
            <div>Loading...</div>
        </div>
    </div>
  );
}

export default LoadingComponent;
