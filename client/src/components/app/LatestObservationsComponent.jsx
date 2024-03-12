import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import LatestObservationsCard from '@components/app/LatestObservationsCard.jsx';
import { API_ENDPOINT } from '@config/config';

function LatestObservationsComponent() {
    const fetchData = async () => {
        const response = await axios.get(`${API_ENDPOINT}/latest-observations`);
        return response.data.latestObservations;
    };

    const renderData = (data, unitPreference) => {
        return <LatestObservationsCard weatherData={data} unitPreference={unitPreference} />;
    };

    return (
        <AppPageComponent
            fetchFunction={fetchData}
            renderData={renderData}
            dependencies={null}
        />
    );
}

export default LatestObservationsComponent;
