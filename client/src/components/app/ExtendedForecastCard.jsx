import React from 'react';
import styles from '@css/extended_forecast.module.css';

// ForecastItem component for displaying forecast data.
function ForecastItem({ forecast }) {
    return (
      <div className={styles['forecast-item']}>
        <div className={styles['day']}>{forecast.day}</div>
  
        <div>
          <img className={styles['condition-icon']} src={forecast.conditionIcon} alt={forecast.condition} />
        </div>
  
        <div className={styles['condition-text']}>{forecast.condition}</div>
  
        <div className={styles['temperature-container']}>
          <div className={styles['temperature-item']}>
            <div className={styles['temperature-type']}>LO</div>
            <div className={styles['temperature']}>{forecast.minTemp}</div>
          </div>
          <div className={styles['temperature-item']}>
            <div className={styles['temperature-type']}>HI</div>
            <div className={styles['temperature']}>{forecast.maxTemp}</div>
          </div>
        </div>
      </div>
    );
}

function ExtendedForecastCard({ weatherData }) {
  return (
    <div className={styles['forecast-container']}>
      {weatherData.forecasts.map((forecast, index) => (
        <ForecastItem forecast={forecast} key={index} />
      ))}
    </div>
  );
}

export default ExtendedForecastCard;
