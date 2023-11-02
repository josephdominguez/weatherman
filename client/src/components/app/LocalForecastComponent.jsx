import React from 'react';
import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import LocalForecastCard from '@components/app/LocalForecastCard.jsx';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function LocalForecastComponent() {
    const { location } = useLocation();
    const { zipCode } = location;

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`http://${API_ENDPOINT}/local-forecast?zipCode=${zipCode}`);
            const weatherData = response.data.localForecast;
            return weatherData;
        } catch (e) { throw e; }
    };

    const renderData = (weatherData) => {
        return <LocalForecastCard weatherData={weatherData} />;
    };

    return (
        <AppPageComponent
            fetchFunction={fetchWeatherData}
            renderData={renderData}
            zipCode={zipCode}
        />
    );
}

export default LocalForecastComponent;
