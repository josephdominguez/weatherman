import React, { useState, useEffect } from "react";
import axios from 'axios';
import AppHeader from "@components/headers/AppHeader";
import AppFooter from "@components/footers/AppFooter";
import styles from "@css/current_conditions.module.css";

const WeatherInfo = ({ label, value }) => (
  <div>
    {label}: &nbsp; {value}
  </div>
);

function CurrentConditions() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrentConditions = async () => {
      try {
        // replace url with hosted api
        const response = await axios.get('http://localhost:8080/current-conditions?zipCode=84101');
        const data = response.data;
        setWeatherData(data.currentConditions);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    getCurrentConditions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message} </div>;
  }

  return (
    <>
      <AppHeader pageTitle="Current Conditions"/>
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <AppFooter />
    </>
  );
}

export default CurrentConditions;
