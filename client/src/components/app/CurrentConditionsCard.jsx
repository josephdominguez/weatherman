import styles from '@css/current_conditions.module.css';

// WeatherInfo component for displaying weather information
function WeatherInfo({ label, value, unit, highlightUnit }) {
    return (
        <div>
            {label}: &nbsp; {value}{' '}
            {highlightUnit ? <span className='highlight'>{unit}</span> : unit}
        </div>
    );
}

// Main card component
function CurrentConditionsCard({ weatherData }) {
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-item']}>
                <div className={styles['temperature']}>
                    {weatherData.temperature}&deg;F
                </div>
                <div className={styles['condition-container']}>
                    <div>{weatherData.condition}</div>
                    <img
                        className={styles['condition-icon']}
                        src={weatherData.conditionIcon}
                        alt={weatherData.condition}
                    />
                </div>
                <div className={styles['wind-container']}>
                    <WeatherInfo 
                        label='Wind' 
                        value={`${weatherData.wind} MPH`} />
                </div>
            </div>
            <div className={styles['card-item']}>
                <div className={styles['details']}>
                    <div className={styles['details-heading']}>
                        <span className='highlight'> {weatherData.city} </span>
                    </div>
                    <WeatherInfo
                        label='Humidity'
                        value={weatherData.humidity}
                        unit='%' />
                    <WeatherInfo
                        label='Dewpoint'
                        value={weatherData.dewpoint}
                        unit='&deg;F' />
                    <WeatherInfo 
                        label='Ceiling' 
                        value={weatherData.ceiling} 
                        unit='' />
                    <WeatherInfo
                        label='Visibility'
                        value={weatherData.visibility}
                        unit='mi.' />
                    <WeatherInfo
                        label='Pressure'
                        value={weatherData.pressure}
                        unit='mb'
                        highlightUnit />
                    <WeatherInfo
                        label='Heat Index'
                        value={weatherData.heatIndex}
                        unit='' />
                </div>
            </div>
        </div>
    );
}

export default CurrentConditionsCard;
