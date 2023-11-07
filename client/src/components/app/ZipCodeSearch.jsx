import { useState } from 'react';
import axios from 'axios';
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';
import styles from '@css/app/zipcode_search.module.css';

function ZipCodeSearch() {
    const navigate = useNavigate();
    const { location, updateLocation } = useLocation();
    const [tempZipCode, setTempZipCode] = useState(location.zipCode || '');

    const handleInputChange = (event) => {
        setTempZipCode(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            updateZipCode();
        }
    };

    const updateZipCode = async () => {
        try {
            const response = await axios.get(
                `http://${API_ENDPOINT}/location?zipCode=${tempZipCode}`
            );
            const location = response.data.location;
            updateLocation({ ...location });
            navigate('/CompleteForecast'); 
        } catch (e) {
            updateLocation({ zipCode: tempZipCode });
        }
    };

    return (
        <>
            <div className={styles['search-container']}>
                <GoSearch className={styles['search-svg']} onClick={updateZipCode} />{' '}
                <input
                    className={styles['search-input']}
                    type='text'
                    placeholder='Get latest forecast by ZIP code'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
            </div>
        </>
    );
}

export default ZipCodeSearch;
