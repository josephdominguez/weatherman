import styles from '@css/travel_forecasts.module.css';

function ForecastItem({ forecast, unitPreference }) {
    return (
        <div className={styles['travel-forecast']}>
            <div> {forecast.city} </div>
            <div>
                <img
                    className={styles['condition-icon']}
                    src={forecast.conditionIcon}
                    alt={forecast.condition}
                />
            </div>
            <div>
                {unitPreference === 'imperial' && forecast.minTempF}
                {unitPreference === 'metric' && forecast.minTempC}
            </div>
            <div>
                {unitPreference === 'imperial' && forecast.maxTempF}
                {unitPreference === 'metric' && forecast.maxTempC}{' '}
            </div>
        </div>
    );
}

function TravelForecastCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['travel-forecasts-container']}>
            <div className={styles['travel-header']}>
                <div></div>
                <div></div>
                <div>LOW</div>
                <div>HIGH</div>
            </div>
            <div className={styles['travel-forecasts']}>
                {weatherData.map((forecast, index) => (
                    <ForecastItem
                        forecast={forecast}
                        key={index}
                        unitPreference={unitPreference}
                    />
                ))}
            </div>
        </div>
    );
}

export default TravelForecastCard;
