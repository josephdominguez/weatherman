import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import TravelForecastCard from '@components/app/TravelForecastCard.jsx';
import { API_ENDPOINT } from '@config/config';

function TravelForecastComponent() {

    const fetchData = async () => {
        const response = await axios.get(`http://${API_ENDPOINT}/travel-forecast`);
        return response.data.travelForecasts;
    };

    const renderData = (data) => {
        console.log(data);
        return <TravelForecastCard weatherData={data} />;
    };

    return (
        <AppPageComponent
            fetchFunction={fetchData}
            renderData={renderData}
            dependencies={null}
        />
    );
}

export default TravelForecastComponent;
