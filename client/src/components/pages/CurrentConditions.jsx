import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppPage from '@components/pages/AppPage';
import ErrorComponent from '@components/app/ErrorComponent';
import LoadingComponent from '@components/app/LoadingComponent';
import styles from '@css/current_conditions.module.css';
import { ZipCodeContext } from '@contexts/ZipCodeContext';

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
  const { zipCode, setZipCode } = useContext(ZipCodeContext);
  const pageTitle = "Current Conditions";

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Perform the action here that you want to execute on pressing enter
        fetchWeatherData();
    }
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/current-conditions?zipCode=${zipCode}`);
      const data = response.data;
      setWeatherData(data.currentConditions);
      setError(null);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <AppPage pageTitle={pageTitle} humidity="" dewpoint="">
        <LoadingComponent />
      </AppPage>
    );
  }

  if (error) {
    return (
      <AppPage pageTitle={pageTitle} humidity="" dewpoint="">
        <ErrorComponent error={error}>
          <div>
            <input type="text" placeholder="Enter Zip Code" value={zipCode} onChange={handleZipCodeChange} />{' '}
            <button onClick={fetchWeatherData}>Get Weather</button>
          </div>
        </ErrorComponent>
      </AppPage>
    );
  }

  return (
    <AppPage pageTitle={pageTitle} location={weatherData.location} humidity={weatherData.humidity} dewpoint={weatherData.dewpoint}>
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
            <div>
              <input onKeyDown={handleKeyPress} type="text" placeholder="Enter Zip Code" value={zipCode} onChange={handleZipCodeChange} />{' '}
              <button onClick={fetchWeatherData}>Get Weather</button>
            </div>
          </div>
        </div>
      </div>
    </AppPage>
  );
}

export default CurrentConditions;
