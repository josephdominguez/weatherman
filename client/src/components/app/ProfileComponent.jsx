import AppPageComponent from './AppPageComponent';
import ProfileCard from '@components/app/ProfileCard.jsx';
import { useLocation } from '@contexts/LocationContext';

function ProfileComponent() {
    const { location } = useLocation();
    const { zipCode } = location;

    const fetchData = async () => {
        return;
    };

    const renderData = () => {
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
