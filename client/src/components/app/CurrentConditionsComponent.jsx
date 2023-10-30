import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingComponent from '@components/app/LoadingComponent';
import ErrorComponent from '@components/app/ErrorComponent';
import ZipCodeUpdater from '@components/app/ZipCodeUpdater';
import CurrentConditionsCard from '@components/app/CurrentConditionsCard.jsx';
import { useLocation } from '@contexts/LocationContext';

function CurrentConditionsComponent() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { location, updateLocation } = useLocation();
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
            <ZipCodeUpdater />
        </ErrorComponent>
        );
    }

    return <CurrentConditionsCard weatherData={weatherData} />;
}

export default CurrentConditionsComponent;