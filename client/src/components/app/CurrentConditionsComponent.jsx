import React from 'react';
import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import CurrentConditionsCard from '@components/app/CurrentConditionsCard.jsx';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function CurrentConditionsComponent() {
    const { location } = useLocation();
    const { zipCode } = location;

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`http://${API_ENDPOINT}/current-conditions?zipCode=${zipCode}`);
            const weatherData = response.data.currentConditions;
            return weatherData;
        } catch (e) { throw e; }
    };

    const renderData = (weatherData) => {
        return <CurrentConditionsCard weatherData={weatherData} />;
    };

    return (
        <AppPageComponent
            fetchFunction={fetchWeatherData}
            renderData={renderData}
            zipCode={zipCode}
        />
    );
}

export default CurrentConditionsComponent;
