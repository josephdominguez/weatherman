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
function CurrentConditionsCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-item']}>
                <div className={styles['temperature']}>
                    {unitPreference === 'imperial' &&
                        `${weatherData.temperatureF}\u00b0F`}
                    {unitPreference === 'metric' &&
                        `${weatherData.temperatureC}\u00b0C`}
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
                    {unitPreference === 'imperial' && (
                        <WeatherInfo
                            label='Wind'
                            value={`${weatherData.windMPH} MPH`}
                        />
                    )}
                    {unitPreference === 'metric' && (
                        <WeatherInfo
                            label='Wind'
                            value={`${weatherData.windKPH} KPH`}
                        />
                    )}
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
                        unit='%'
                    />
                    {unitPreference === 'imperial' && (
                        <WeatherInfo
                            label='Dewpoint'
                            value={weatherData.dewpointF}
                            unit='&deg;F'
                        />
                    )}
                    {unitPreference === 'metric' && (
                        <WeatherInfo
                            label='Dewpoint'
                            value={weatherData.dewpointC}
                            unit='&deg;C'
                        />
                    )}
                    <WeatherInfo label='Ceiling' value={weatherData.ceiling} unit='' />
                    {unitPreference === 'imperial' && (
                        <WeatherInfo
                            label='Visibility'
                            value={weatherData.visibilityM}
                            unit='mi.'
                        />
                    )}
                    {unitPreference === 'metric' && (
                        <WeatherInfo
                            label='Visibility'
                            value={weatherData.visibilityKM}
                            unit='km.'
                        />
                    )}
                    {unitPreference === 'imperial' && (
                        <WeatherInfo
                            label='Pressure'
                            value={weatherData.pressureIN}
                            unit='in'
                            highlightUnit
                        />
                    )}
                    {unitPreference === 'metric' && (
                        <WeatherInfo
                            label='Pressure'
                            value={weatherData.pressureMB}
                            unit='mb'
                            highlightUnit
                        />
                    )}
                    <WeatherInfo
                        label='Heat Index'
                        value={weatherData.heatIndex}
                        unit=''
                    />
                </div>
            </div>
        </div>
    );
}

export default CurrentConditionsCard;
