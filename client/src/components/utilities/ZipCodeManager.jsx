import { useState } from 'react';
import axios from 'axios';
import { useLocation } from '@contexts/LocationContext';
import { useUserInfo } from '@contexts/UserInfoContext';
import { API_ENDPOINT } from '@config/config';

function ZipCodeManager() {
    const { location, updateLocation } = useLocation();
    const { userInfo } = useUserInfo();
    const [tempZipCode, setTempZipCode] = useState(location.zipCode || '');
    const [error, setError] = useState(null);

    const getZipCode = () => {
        return location.zipCode;
    }

    const handleInputChange = (event) => {
        setTempZipCode(event.target.value);
    };

    const handleKeyPress = (event, onSuccessCallback) => {
        if (event.key === 'Enter') {
            updateZipCode(onSuccessCallback);
        }
    };

    const updateZipCode = async (zipCode=tempZipCode, onSuccessCallback=false) => {
        try {
            const response = await axios.get(
                `http://${API_ENDPOINT}/location?zipCode=${zipCode}`
            );
            const location = response.data.location;
            updateLocation({ ...location });
            setError(null);

            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } catch (e) {
            setError('Invalid ZIP code.');
            updateLocation({ zipCode: zipCode });
        }
    };

    return {
        tempZipCode,
        setTempZipCode,
        getZipCode,
        handleInputChange,
        handleKeyPress,
        updateZipCode,
        error
    };
}

export default ZipCodeManager;
