import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppHeader from '@components/headers/AppHeader';
import AppFooter from '@components/footers/AppFooter';
import styles from '@css/current_conditions.module.css';
import { ZipCodeContext } from '@contexts/ZipCodeContext';

const WeatherInfo = ({ label, value, unit, highlightUnit}) => (
  <div>
    {label}: &nbsp; {value} {highlightUnit ? <span className="highlight">{unit}</span> : unit}
  </div>
);

function CurrentConditions() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {zipCode, setZipCode} = useContext(ZipCodeContext); // Loads zip code context

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      // replace url with hosted api
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

  useEffect(() => { fetchWeatherData(); }, []); // Fetch data when zipCode Changes

  if (loading) {
    return (
      <>
        <AppHeader pageTitle="Current Conditions" location="" />
        <main>
            <div className={styles["current-conditions"]}>
              <div className={`${styles["current-conditions-container"]} gradient-border`}>
                <div className={styles["current-conditions-item"]}>
                    <div>Loading...</div>
                </div>
              </div>
            </div>
          </main>
        <AppFooter humidity="" dewpoint="" />
      </>
    );
  }

  if (error) {
    return (
      <>
          <AppHeader pageTitle="Current Conditions" location="" />
          <main>
            <div className={styles["current-conditions"]}>
              <div className={`${styles["current-conditions-container"]} gradient-border`}>
                <div className={styles["current-conditions-item"]}>
                    <div>Error: {error.message} </div>
                    <div>
                      <input type="text" placeholder="Enter Zip Code" value={zipCode} onChange={handleZipCodeChange}/> {' '}
                      <button onClick={fetchWeatherData}>Get Weather</button>
                    </div>
                </div>
              </div>
            </div>
          </main>
          <AppFooter humidity="" dewpoint="" />
      </>
    );
  }

  return (
    <>
      <AppHeader pageTitle="Current Conditions" location={weatherData.location}/>
      <main>
        <div className={styles["current-conditions"]}>
          <div className={`${styles["current-conditions-container"]} gradient-border`}>
            <div className={styles["current-conditions-item"]}>
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
            <div className={styles["current-conditions-item"]}>
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
                  <input type="text" placeholder="Enter Zip Code" value={zipCode} onChange={handleZipCodeChange}/> {' '}
                  <button onClick={fetchWeatherData}>Get Weather</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AppFooter humidity={weatherData.humidity} dewpoint={weatherData.dewpoint} />
    </>
  );
}

export default CurrentConditions;
