import React from 'react';
import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import TravelForecastCard from '@components/app/TravelForecastCard.jsx';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function TravelForecastComponent() {
    const { location } = useLocation();
    const { zipCode } = location;

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://${API_ENDPOINT}/current-conditions?zipCode=${zipCode}`);
            return response.data.currentConditions;
        } catch (e) { throw e; }
    };

    const renderData = (data) => {
        return <TravelForecastCard weatherData={data} />;
    };

    return (
        <AppPageComponent
            fetchFunction={fetchData}
            renderData={renderData}
            dependencies={zipCode}
        />
    );
}

export default TravelForecastComponent;
