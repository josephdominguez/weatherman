import React, { useState } from 'react';
import { useLocation } from '@contexts/LocationContext';

function ZipCodeUpdater() {
  const { location, updateLocation } = useLocation();
  const [tempZipCode, setTempZipCode] = useState(location.zipCode || '');

  const handleInputChange = (event) => {
    setTempZipCode(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      updateLocation({ zipCode: tempZipCode });
    }
  };

  const updateZipCode = () => {
    updateLocation({ zipCode: tempZipCode });
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
