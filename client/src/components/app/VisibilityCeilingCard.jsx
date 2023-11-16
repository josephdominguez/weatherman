import styles from '@css/app/footer.module.css';

function VisibilityCeilingCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['footer-container']}>
            <div className={styles['footer-item']}>
                {unitPreference === 'imperial' &&
                    `Visibility: ${weatherData.visibilityM} mi.`}
                {unitPreference === 'metric' &&
                    `Visibility: ${weatherData.visibilityKM} km.`}
            </div>
            <div className={styles['footer-item']}>
                {unitPreference === 'imperial' &&
                    `Ceiling: ${weatherData.ceiling}`}
                {unitPreference === 'metric' &&
                    `Ceiling: ${weatherData.ceiling}`}
            </div>
        </div>
    );
}

export default VisibilityCeilingCard;
