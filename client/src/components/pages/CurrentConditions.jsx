import React, { useState, useEffect } from "react";
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
    setTimeout(() => {
      const apiData = {
        temperature: "63°F",
        condition: "Rainy",
        conditionIcon: "images/conditions/shower.gif",
        wind: "Calm",
        location: "Salt Lake City",
        humidity: "63%",
        dewpoint: "70°F",
        ceiling: "Unlimited",
        visibility: "10 mi.",
        pressure: "29.99 S",
        heatIndex: "89°",
      };
      setWeatherData(apiData);
      setLoading(false);
    }, 2000); // Simulates a 2-second delay
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
                {weatherData.temperature}
              </div>
              <div className={styles["align-start"]}>
                <div>{weatherData.condition}</div>
                <img className={styles["condition"]} src={weatherData.conditionIcon} alt={weatherData.condition} />
              </div>
              <div className={styles["align-start"]}>
                <WeatherInfo label="Wind" value={weatherData.wind} />
              </div>
            </div>
            <div className={styles["current-conditions-item"]}>
              <div className={styles["details"]}>
                <div className={styles["details-heading"]}>
                  <span className="highlight"> {weatherData.location} </span>
                </div>
                <WeatherInfo label="Humidity" value={weatherData.humidity} />
                <WeatherInfo label="Dewpoint" value={weatherData.dewpoint} />
                <WeatherInfo label="Ceiling" value={weatherData.ceiling} />
                <WeatherInfo label="Visibility" value={weatherData.visibility} />
                <WeatherInfo label="Pressure" value={weatherData.pressure} />
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
