import { useState } from 'react';
import { useLocation } from '@contexts/LocationContext';

function ZipCodeManager() {
    const { location, updateLocationByZipCode } = useLocation();
    const [tempZipCode, setTempZipCode] = useState(location.zipCode || '');
    const [error, setError] = useState(null);

    const getZipCode = () => {
        return location.zipCode;
    };

    const updateZipCode = async (onSuccessCallback) => {
        try {
            await updateLocationByZipCode(tempZipCode, onSuccessCallback);
        } catch (e) {
            setError('Invalid ZIP code.');
        }
    };

    const handleInputChange = (event) => {
        setTempZipCode(event.target.value);
    };

    const handleKeyPress = async (event, onSuccessCallback) => {
        if (event.key === 'Enter') {
            try {
                await updateLocationByZipCode(tempZipCode, onSuccessCallback);
            } catch (e) {
                setError('Invalid ZIP code.');
            }
        }
    };

    return {
        tempZipCode,
        setTempZipCode,
        getZipCode,
        updateZipCode,
        handleInputChange,
        handleKeyPress,
        error,
    };
}

export default ZipCodeManager;
