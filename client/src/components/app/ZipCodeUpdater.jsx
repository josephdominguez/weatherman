import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function ZipCodeUpdater() {
  const { location, updateLocation } = useLocation();
  const [tempZipCode, setTempZipCode] = useState(location.zipCode || '');

  const handleInputChange = (event) => {
    setTempZipCode(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') { updateZipCode(); }
  };

  const updateZipCode = async () => {
    try {
      const response = await axios.get(`http://${API_ENDPOINT}/location?zipCode=${tempZipCode}`);
      const location = response.data.location;
      updateLocation({ ...location });
    } catch(e) {
      updateLocation({ zipCode: tempZipCode });
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter Zip Code" value={tempZipCode} onChange={handleInputChange} onKeyDown={handleKeyPress} />
      {' '}
      <button onClick={updateZipCode}>Update Zip Code</button>
    </div>
  );
}

export default ZipCodeUpdater;
