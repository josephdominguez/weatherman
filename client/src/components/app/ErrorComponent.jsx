import ZipCodeUpdater from '@components/app/ZipCodeUpdater';
import styles from '@css/app/card_container.module.css';

function ErrorComponent({ error }) {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-item']}>
        <div>Error: {error.message}</div>
        <ZipCodeUpdater />
      </div>
    </div>
  );
}

export default ErrorComponent;
