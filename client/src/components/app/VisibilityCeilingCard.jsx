import styles from '@css/app/footer.module.css';

function VisibilityCeilingCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['footer-container']}>
            <div className={styles['footer-item']}>
                {unitPreference === 'imperial' &&
                    `Visibility: ${weatherData.visibilityM} Ceiling: ${weatherData.ceiling}`}
                {unitPreference === 'metric' &&
                    `Visibility: ${weatherData.visibilityKM} Ceiling: ${weatherData.ceiling}`}
            </div>
        </div>
    );
}

export default VisibilityCeilingCard;
