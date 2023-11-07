import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import CurrentConditionsCard from '@components/app/CurrentConditionsCard.jsx';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function CurrentConditionsComponent() {
    const { location } = useLocation();
    const { zipCode } = location;

    const fetchData = async () => {
        const response = await axios.get(`http://${API_ENDPOINT}/current-conditions?zipCode=${zipCode}`);
        return response.data.currentConditions;
    };
    const renderData = (data) => {
        return <CurrentConditionsCard weatherData={data} />;
    };

    return (
        <AppPageComponent
            fetchFunction={fetchData}
            renderData={renderData}
            dependencies={zipCode}
        />
    );
}

export default CurrentConditionsComponent;
