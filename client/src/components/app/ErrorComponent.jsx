import React from 'react';
import styles from '@css/app/card_container.module.css';
import ZipCodeUpdater from '@components/app/ZipCodeUpdater';

function ErrorComponent({ error, children }) {
  return (
    <div className={`${styles["card-container"]}`}>
      <div className={styles["card-item"]}>
        <div>Error: {error.message}</div>
        <ZipCodeUpdater />
      </div>
    </div>
  );
}

export default ErrorComponent;
