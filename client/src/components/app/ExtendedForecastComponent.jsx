import React from 'react';
import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import ExtendedForecastCard from '@components/app/ExtendedForecastCard.jsx';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function ExtendedForecastComponent() {
    const { location } = useLocation();
    const { zipCode } = location;

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://${API_ENDPOINT}/extended-forecast?zipCode=${zipCode}`);
            return response.data.extendedForecast;
        } catch (e) { throw e; }
    };

    const renderData = (data) => {
        return <ExtendedForecastCard weatherData={data} />;
    };

    return (
        <AppPageComponent
            fetchFunction={fetchData}
            renderData={renderData}
            dependencies={zipCode}
        />
    );
}

export default ExtendedForecastComponent;
