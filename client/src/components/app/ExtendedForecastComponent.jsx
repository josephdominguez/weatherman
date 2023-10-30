import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ErrorComponent from '@components/app/ErrorComponent';
import LoadingComponent from '@components/app/LoadingComponent';
import ExtendedForecastCard from '@components/app/ExtendedForecastCard';
import ZipCodeUpdater from '@components/app/ZipCodeUpdater';
import { useLocation } from '@contexts/LocationContext';

function ExtendedForecastComponent() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { location, updateLocation } = useLocation();
    const { zipCode } = location;
  

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/extended-forecast?zipCode=${zipCode}`);
            const weatherData = response.data.extendedForecast;
            setWeatherData(weatherData);
            setError(null);
            setLoading(false);
        } catch(e) {
            setError(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, [zipCode]);

    if (loading) {
        return (
            <LoadingComponent />
        );
    }

    if (error) {
        return (
            <ErrorComponent error={error}>
                <ZipCodeUpdater />
            </ErrorComponent>
        );
    }

  return (
    <ExtendedForecastCard weatherData={weatherData} />
  );
}

export default ExtendedForecastComponent;
