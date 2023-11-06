import styles from '@css/local_forecast.module.css';

function LocalForecastCard({weatherData}) {
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-item']}>
                <div className={styles['forecast']}>
                    SYNOPSIS. {weatherData.synopsis}
                </div>
            </div>
        </div>
    );
}

export default LocalForecastCard;
