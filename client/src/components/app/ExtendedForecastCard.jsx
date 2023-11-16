import styles from '@css/extended_forecast.module.css';

// ForecastItem component for displaying forecast data.
function ForecastItem({ forecast, unitPreference }) {
    return (
        <div className={styles['forecast-item']}>
            <div className={styles['day']}>{forecast.day}</div>

            <div>
                <img
                    className={styles['condition-icon']}
                    src={forecast.conditionIcon}
                    alt={forecast.condition}
                />
            </div>

            <div className={styles['condition-text']}>{forecast.condition}</div>

            <div className={styles['temperature-container']}>
                <div className={styles['temperature-item']}>
                    <div className={styles['temperature-type']}>LO</div>
                    {unitPreference === 'imperial' && (
                        <div className={styles['temperature']}>{forecast.minTempF}</div>
                    )}
                    {unitPreference === 'metric' && (
                        <div className={styles['temperature']}>{forecast.minTempC}</div>
                    )}{' '}
                </div>
                <div className={styles['temperature-item']}>
                    <div className={styles['temperature-type']}>HI</div>
                    {unitPreference === 'imperial' && (
                        <div className={styles['temperature']}>{forecast.maxTempF}</div>
                    )}{' '}
                    {unitPreference === 'metric' && (
                        <div className={styles['temperature']}>{forecast.maxTempC}</div>
                    )}{' '}
                </div>
            </div>
        </div>
    );
}

function ExtendedForecastCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['forecast-container']}>
            {weatherData.forecasts.map((forecast, index) => (
                <ForecastItem
                    forecast={forecast}
                    key={index}
                    unitPreference={unitPreference}
                />
            ))}
        </div>
    );
}

export default ExtendedForecastCard;
