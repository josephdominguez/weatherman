import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppPage from '@components/pages/AppPage';
import ErrorComponent from '@components/app/ErrorComponent';
import LoadingComponent from '@components/app/LoadingComponent';
import styles from '@css/extended_forecast.module.css';
import { ZipCodeContext } from '@contexts/ZipCodeContext';

function ExtendedForecast() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { zipCode, setZipCode } = useContext(ZipCodeContext);
    const pageTitle = "Extended Forecast"

    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/extended-forecast?zipCode=${zipCode}`);
            setWeatherData(response.data.extendedForecast);
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
    <AppPage pageTitle={pageTitle} location={weatherData.location} humidity="" dewpoint="">
        <div className={styles['forecast-container']}>
            {weatherData.extendedForecast.map((forecast, index) => (
            <div className={styles['forecast-item']} key={index}>
                <div className={styles['day']}>{forecast.day}</div>

                <div>
                    <img className={styles['condition']} src={forecast.conditionIcon} alt={forecast.condition} />
                </div>

                <div>{forecast.condition}</div>

                <div className={styles['temperature-container']}>
                    <div className={styles['temperature-item']}>
                        <div>LO</div>
                        <div className={styles['temperature']}>{forecast.minTemp}</div>
                    </div>
                    <div className={styles['temperature-item']}>
                        <div>HI</div>
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
