import styles from '@css/latest_observations.module.css';

function LatestObservationsItem({ forecast }) {
    return (
        <div>
            <div>{forecast.city}</div>
            <div>{forecast.temperatureF}</div>
            <div>{forecast.condition}</div>
            <div>{forecast.windDirection}</div>
            <div>{forecast.windSpeedMPH}</div>
        </div>
    );
}

function LatestObservationsCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-item']}>
                <div className={styles['observations-container']}>
                    <div className={styles['observations-header']}>
                        <div></div>
                        <div>{unitPreference === 'imperial' &&
                            `\u00b0F`}
                            {unitPreference === 'metric' &&
                                `\u00b0C`}</div>
                        <div>WEATHER</div>
                        <div>WIND</div>
                    </div>
                    <div className={styles['forecast']}>
                        {weatherData.map((forecast, index) => (
                            <LatestObservationsItem
                                forecast={forecast}
                                key={index}
                                unitPreference={unitPreference}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestObservationsCard;
