import Spinner from '@components/utilities/Spinner';
import styles from '@css/app/card_container.module.css';

function LoadingComponent() {
    return (
        <div className={`${styles['card-container']}`}>
            <div className={styles['card-item']}>
                <div className={styles['loading-card-container']}>
                    <Spinner />
                </div>
            </div>
        </div>
    );
}

export default LoadingComponent;
