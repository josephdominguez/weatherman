import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppPage from '@components/pages/AppPage';
import ErrorComponent from '@components/app/ErrorComponent';
import LoadingComponent from '@components/app/LoadingComponent';
import ZipCodeUpdater from '@components/app/ZipCodeUpdater';
import { useLocation } from '@contexts/LocationContext';
import styles from '@css/current_conditions.module.css';

// WeatherInfo component for displaying weather information
const WeatherInfo = ({ label, value, unit, highlightUnit }) => (
  <div>
    {label}: &nbsp; {value} {highlightUnit ? <span className="highlight">{unit}</span> : unit}
  </div>
);

function CurrentConditions() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { location, updateLocation } = useLocation();
  const { zipCode } = location;
  const pageTitle = "Current Conditions";

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/current-conditions?zipCode=${zipCode}`);
      const weatherData = response.data.currentConditions;
      setWeatherData(weatherData);
      setError(null);
      setLoading(false);
      updateLocation({city: weatherData.city});
    } catch (e) {
      setError(e);
      setLoading(false);
      updateLocation({city: ''});
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [zipCode]);

  if (loading) {
    return (
      <AppPage pageTitle={pageTitle}>
        <LoadingComponent />
      </AppPage>
    );
  }

  if (error) {
    return (
      <AppPage pageTitle={pageTitle}>
        <ErrorComponent error={error}>
          <ZipCodeUpdater />
        </ErrorComponent>
      </AppPage>
    );
  }

  return (
    <AppPage pageTitle={pageTitle}>
      <div className={`${styles["card-container"]}`}>
        <div className={styles["card-item"]}>
          <div className={styles["temperature"]}>
            {weatherData.temperature}&deg;F
          </div>
          <div className={styles["condition-container"]}>
            <div>{weatherData.condition}</div>
            <img className={styles["condition-icon"]} src={weatherData.conditionIcon} alt={weatherData.condition} />
          </div>
          <div className={styles["wind-container"]}>
            <WeatherInfo label="Wind" value={`${weatherData.wind} MPH`} />
          </div>
        </div>
        <div className={styles["card-item"]}>
          <div className={styles["details"]}>
            <div className={styles["details-heading"]}>
              <span className="highlight"> {weatherData.location} </span>
            </div>
            <WeatherInfo label="Humidity" value={weatherData.humidity} unit="%" />
            <WeatherInfo label="Dewpoint" value={weatherData.dewpoint} unit="&deg;F" />
            <WeatherInfo label="Ceiling" value={weatherData.ceiling} unit="" />
            <WeatherInfo label="Visibility" value={weatherData.visibility} unit="mi." />
            <WeatherInfo label="Pressure" value={weatherData.pressure} unit="mb" highlightUnit />
            <WeatherInfo label="Heat Index" value={weatherData.heatIndex} unit="" />
            <ZipCodeUpdater />
          </div>
        </div>
      </div>
    </AppPage>
  );
}

export default CurrentConditions;
