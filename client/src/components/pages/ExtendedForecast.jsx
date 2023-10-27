import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppPage from '@components/pages/AppPage';
import ErrorComponent from '@components/app/ErrorComponent';
import LoadingComponent from '@components/app/LoadingComponent';
import ZipCodeUpdater from '@components/app/ZipCodeUpdater';
import { useLocation } from '@contexts/LocationContext';
import styles from '@css/extended_forecast.module.css';

function ExtendedForecast() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { location, updateLocation } = useLocation();
    const { zipCode } = location;
  
    const pageTitle = 'Extended Forecast';

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/extended-forecast?zipCode=${zipCode}`);
            const weatherData = response.data.extendedForecast;
            setWeatherData(weatherData);
            updateLocation({city: weatherData.city});
            setError(null);
            setLoading(false);
        } catch(e) {
            updateLocation({city: ''});
            setError(e);
            setLoading(false);
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
        <div className={styles['forecast-container']}>
            {weatherData.extendedForecast.map((forecast, index) => (
            <div className={styles['forecast-item']} key={index}>
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
        ))}
      </div>
    </AppPage>
  );
}

export default ExtendedForecast;
