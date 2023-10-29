import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from '@contexts/LocationContext';
import styles from '@css/app/footer.module.css';

function AppFooter() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { location } = useLocation();
  const { zipCode } = location;

  const fetchWeatherData = async () => {
    try {
      // TO-DO: Replace endpoint with footer endpoint.
      const response = await axios.get(`http://localhost:8080/current-conditions?zipCode=${zipCode}`);
      const weatherData = response.data.currentConditions;
      setWeatherData(weatherData);
      setError(null);
      setLoading(false);
    } catch(e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, [zipCode]);

  if (loading) {
    return (
    <footer className={styles['app-footer']}>
        <div className={styles['footer-container']}>
        </div>
    </footer>
    )
  }

  if (error) {
    return (
    <footer className={styles['app-footer']}>
      <div className={styles['footer-container']}>
      </div>
    </footer>
    )
  }

  return (
    <footer className={styles['app-footer']}>
        <div className={styles['footer-container']}>
            <div className={styles['footer-item']}>
                Humidity: {weatherData.humidity}%
            </div> 
            <div className={styles['footer-item']}>
                Dewpoint: {weatherData.dewpoint}&deg;F
            </div>
        </div>
    </footer>
  );
}

export default AppFooter;
