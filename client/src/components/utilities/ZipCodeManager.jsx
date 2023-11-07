import { useState } from 'react';
import axios from 'axios';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

export function ZipCodeManager() {
  const { location, updateLocation } = useLocation();
  const [tempZipCode, setTempZipCode] = useState(location.zipCode || '');

  const handleInputChange = (event) => {
    setTempZipCode(event.target.value);
  };

  const handleKeyPress = (event, onSuccessCallback) => {
    if (event.key === 'Enter') {
      updateZipCode(onSuccessCallback);
    }
  };

  const updateZipCode = async (onSuccessCallback) => {
    try {
      const response = await axios.get(
        `http://${API_ENDPOINT}/location?zipCode=${tempZipCode}`
      );
      const location = response.data.location;
      updateLocation({ ...location });

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } catch (e) {
      updateLocation({ zipCode: tempZipCode });
    }
  };

  return {
    tempZipCode,
    handleInputChange,
    handleKeyPress,
    updateZipCode,
  };
}
