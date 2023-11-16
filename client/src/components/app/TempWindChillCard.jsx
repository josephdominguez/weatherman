import styles from '@css/app/footer.module.css';

function TempWindChillCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['footer-container']}>
            <div className={styles['footer-item']}>
            {unitPreference === 'imperial' &&
                    `Temp: ${weatherData.temperatureF}\u00b0F`}
                {unitPreference === 'metric' &&
                    `Temp: ${weatherData.temperatureC}\u00b0C`}
            </div>
            <div className={styles['footer-item']}>
                {unitPreference === 'imperial' &&
                    `Wind Chill: ${weatherData.windChillF}\u00b0F`}
                {unitPreference === 'metric' &&
                    `Wind Chill: ${weatherData.windChillC}\u00b0C`}
            </div>
        </div>
    );
}

export default TempWindChillCard;
