import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '@config/config';

export const LocationContext = createContext();

export function useLocation() {
    return useContext(LocationContext);
}

export function LocationProvider({ children }) {
    const [location, setLocation] = useState({
        zipCode: '84101',
        city: 'Salt Lake City',
    });

    const updateLocation = (newLocation) => {
        setLocation((prevLocation) => ({ ...prevLocation, ...newLocation }));
    };

    const updateLocationByZipCode = async (zipCode, onSuccessCallback) => {
        try {
            const response = await axios.get(
                `${API_ENDPOINT}/location?zipCode=${zipCode}`
            );
            const newLocation = response.data.location;
            updateLocation(newLocation);

            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } catch (e) {
            console.error('Error updating ZIP code:', e);
            throw new Error('Invalid ZIP code.');
        }
    };

    return (
        <LocationContext.Provider
            value={{ location, updateLocation, updateLocationByZipCode }}
        >
            {children}
        </LocationContext.Provider>
    );
}
