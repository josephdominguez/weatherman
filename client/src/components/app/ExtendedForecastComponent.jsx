import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import ExtendedForecastCard from '@components/app/ExtendedForecastCard.jsx';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function ExtendedForecastComponent() {
    const { location } = useLocation();
    const { zipCode } = location;

    const fetchData = async () => {
        const response = await axios.get(
            `${API_ENDPOINT}/extended-forecast?zipCode=${zipCode}`
        );
        return response.data.extendedForecast;
    };

    const renderData = (data, unitPreference) => {
        return <ExtendedForecastCard weatherData={data} unitPreference={unitPreference}/>;
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
