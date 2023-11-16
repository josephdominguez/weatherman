import styles from '@css/app/footer.module.css';

function HumidityDewpointCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['footer-container']}>
            <div className={styles['footer-item']}>
                Humidity: {weatherData.humidity}%
            </div>
            <div className={styles['footer-item']}>
                {unitPreference === 'imperial' &&
                    `Dewpoint: ${weatherData.dewpointF}\u00b0F`}
                {unitPreference === 'metric' &&
                    `Dewpoint: ${weatherData.dewpointC}\u00b0C`}
            </div>
        </div>
    );
}

export default HumidityDewpointCard;
