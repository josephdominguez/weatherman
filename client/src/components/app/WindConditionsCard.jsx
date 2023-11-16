import styles from '@css/app/footer.module.css';

function WindConditionsCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['footer-item']}>
            {unitPreference === 'imperial' &&
                `Wind: ${weatherData.windDirection} ${weatherData.windSpeedMPH} MPH`}
            {unitPreference === 'metric' &&
                `Wind: ${weatherData.windDirection} ${weatherData.windSpeedKPH} KPH`}
        </div>
    );
}

export default WindConditionsCard;
