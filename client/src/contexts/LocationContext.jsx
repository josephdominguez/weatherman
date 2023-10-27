import React, { createContext, useContext, useState } from 'react';

export const LocationContext = createContext();

export function useLocation() {
  return useContext(LocationContext);
}

export function LocationProvider({ children }) {
  const [location, setLocation] = useState({
    zipCode: '84101',
    city: 'Salt Lake City', // Default values for now
  });

  const updateLocation = (newLocation) => {
    setLocation((prevLocation) => ({ ...prevLocation, ...newLocation }));
  };

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
