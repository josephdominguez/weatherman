import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentConditionsCard from '@components/app/CurrentConditionsCard.jsx';
import LoadingComponent from '@components/app/LoadingComponent';
import ErrorComponent from '@components/app/ErrorComponent';
import { useLocation } from '@contexts/LocationContext';

function CurrentConditionsComponent() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { location } = useLocation();
    const { zipCode } = location;
  
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/current-conditions?zipCode=${zipCode}`);
        const weatherData = response.data.currentConditions;
        setWeatherData(weatherData);
        setError(null);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchWeatherData();
    }, [zipCode]);
    
    if (loading) {
        return <LoadingComponent />;
    }

    if (error) {
        return (
        <ErrorComponent error={error}>
        </ErrorComponent>
        );
    }

    return <CurrentConditionsCard weatherData={weatherData} />;
}

export default CurrentConditionsComponent;
