import styles from '@css/travel_forecasts.module.css';

const ForecastItem = ({ forecast }) => (
    <div className={styles['travel-forecast']}>    
      <div> 
        {forecast.city}
      </div>
      <div>
        <img className={styles['condition-icon']} src={forecast.conditionIcon} alt={forecast.condition} />
      </div>
      <div> {forecast.minTemp} </div>
      <div> {forecast.maxTemp} </div>
  </div>
);

// Main card component
const TravelForecastCard = ({ weatherData }) => (
  <div className={styles['travel-forecasts-container']}>
    <div className={styles['travel-header']}>
      <div>
        LOW 
      </div>
      <div>
        HIGH
      </div>
    </div>
    <div className={styles['travel-forecasts']}>
      {weatherData.map((forecast, index) => (
        <ForecastItem forecast={forecast} key={index} />
      ))}
    </div>
  </div>
);

export default TravelForecastCard;
