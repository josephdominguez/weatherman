import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocalForecastCard from '@components/app/LocalForecastCard';
import ErrorComponent from '@components/app/ErrorComponent';
import LoadingComponent from '@components/app/LoadingComponent';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function LocalForecastComponent() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { location } = useLocation();
    const { zipCode } = location;

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`http://${API_ENDPOINT}/local-forecast?zipCode=${zipCode}`);
            const weatherData = response.data.localForecast;
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
            </ErrorComponent>
        );
    }

    return (
        <LocalForecastCard weatherData={weatherData} />
    );
}

export default LocalForecastComponent;
