import React from 'react';
import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import ExtendedForecastCard from '@components/app/ExtendedForecastCard.jsx';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function ExtendedForecastComponent() {
    const { location } = useLocation();
    const { zipCode } = location;

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`http://${API_ENDPOINT}/extended-forecast?zipCode=${zipCode}`);
            const weatherData = response.data.extendedForecast;
            return weatherData;
        } catch (e) { throw e; }
    };

    const renderData = (weatherData) => {
        return <ExtendedForecastCard weatherData={weatherData} />;
    };

    return (
        <AppPageComponent
            fetchFunction={fetchWeatherData}
            renderData={renderData}
            dependencies={zipCode}
        />
    );
}

export default ExtendedForecastComponent;
