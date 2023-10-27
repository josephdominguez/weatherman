import React from 'react';
import styles from '@css/app/card_container.module.css';

function ErrorComponent({ error, children }) {
  return (
    <div className={`${styles["card-container"]}`}>
      <div className={styles["card-item"]}>
        <div>Error: {error.message}</div>
        {children}
      </div>
    </div>
  );
}

export default ErrorComponent;
