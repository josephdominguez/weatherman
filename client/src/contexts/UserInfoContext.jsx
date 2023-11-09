import { createContext, useContext, useState } from 'react';

export const UserInfoContext = createContext();

export function useUserInfo() {
    return useContext(UserInfoContext);
}

export function UserInfoProvider({ children }) {
    const defaultUserInfo = {
        sub: null,
        email: null,
        savedLocations: ['10001'], // Default ZIP Code
        unitPreference: 'imperial', // Default unit preference
    };

    const [userInfo, setUserInfo] = useState(defaultUserInfo);
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

    const resetUserInfo = () => {
        setUserInfo(defaultUserInfo);
    }

    return (
        <UserInfoContext.Provider
            value={{
                userInfo,
                accessToken,
                updateUserInfo,
                updateAccessToken,
                resetUserInfo
            }}
        >
            {children}
        </UserInfoContext.Provider>
    );
}
