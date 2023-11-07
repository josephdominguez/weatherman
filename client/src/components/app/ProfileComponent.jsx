import axios from 'axios';
import AppPageComponent from './AppPageComponent';
import ProfileCard from '@components/app/ProfileCard.jsx';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function ProfileComponent() {
    const { location } = useLocation();
    const { zipCode } = location;

    const fetchData = async () => {
        const response = await axios.get(`http://${API_ENDPOINT}/local-forecast?zipCode=${zipCode}`);
        return response.data.localForecast;
    };

    const renderData = (data) => {
        return <ProfileCard />;
    };

    return (
        <AppPageComponent
            fetchFunction={fetchData}
            renderData={renderData}
            dependencies={zipCode}
        />
    );
}

export default ProfileComponent;
