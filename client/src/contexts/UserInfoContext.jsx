import { createContext, useContext, useState } from 'react';

export const UserInfoContext = createContext();

export function useUserInfo() {
    return useContext(UserInfoContext);
}

export function UserInfoProvider({ children }) {
    const [userInfo, setUserInfo] = useState({
        sub: null,
        email: null,
        savedLocations: ['10001'], // Default ZIP Code
        unitPreference: 'imperial', // Default unit preference
    });
    const [accessToken, setAccessToken] = useState(null);

    const updateUserInfo = (newUserInfo) => {
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            ...newUserInfo
        }));
    };

    const updateAccessToken = (token) => {
        setAccessToken(token);
    };

    return (
        <UserInfoContext.Provider
            value={{
                userInfo,
                accessToken,
                updateUserInfo,
                updateAccessToken,
            }}
        >
            {children}
        </UserInfoContext.Provider>
    );
}
