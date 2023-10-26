import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppHeader from '@components/headers/AppHeader';
import AppFooter from '@components/footers/AppFooter';
import styles from '@css/current_conditions.module.css';

const WeatherInfo = ({ label, value }) => (
  <div>
    {label}: &nbsp; {value}
  </div>
);

function CurrentConditions() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zipCode, setZipCode] = useState('84101'); // Initial zip code

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      // replace url with hosted api
      const response = await axios.get(`http://localhost:8080/current-conditions?zipCode=${zipCode}`);
      const data = response.data;
      setWeatherData(data.currentConditions);
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
          <div>Loading...</div>
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
            <div>Error: {error.message} </div>
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
                {weatherData.temperature} °F
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
                <WeatherInfo label="Humidity" value={`${weatherData.humidity} %`} />
                <WeatherInfo label="Dewpoint" value={`${weatherData.dewpoint}°F`}/>
                <WeatherInfo label="Ceiling" value={weatherData.ceiling} />
                <WeatherInfo label="Visibility" value={weatherData.visibility} />
                <WeatherInfo label="Pressure" value={`${weatherData.pressure} S`} />
                <WeatherInfo label="Heat Index" value={weatherData.heatIndex} />
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
