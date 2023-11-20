import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserInfo } from '@contexts/UserInfoContext';
import { useLocation } from '@contexts/LocationContext';
import { API_ENDPOINT } from '@config/config';

function UserAPI() {
    const { getAccessTokenSilently } = useAuth0();
    const { updateUserInfo } = useUserInfo();
    const { updateLocationByZipCode } = useLocation();

    // Extracts user info from response body.
    const getUserInfo = (response) => {
        const { sub, email, savedLocations, unitPreference } = response.data.user;
        const userInfo = { sub, email, savedLocations, unitPreference };
        return userInfo;
    };

    const setUserInfo = async (userInfo) => {
        updateUserInfo({ ...userInfo });
        setZipCode(userInfo.savedLocations[0]);
    };

    const createUserWithAPI = async (newUserInfo) => {
        try {
            const accessToken = await getAccessTokenSilently();
            const response = await axios.post(
                `http://${API_ENDPOINT}/users`,
                {
                    sub: newUserInfo.sub,
                    email: newUserInfo.email,
                    savedLocations: newUserInfo.savedLocations,
                    unitPreference: newUserInfo.unitPreference,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            const userInfo = getUserInfo(response);
            setUserInfo(userInfo);
        } catch (e) {
            console.error(`Error creating user: ${e}`);
        }
    };

    const getUserFromAPI = async (sub) => {
        try {
            const accessToken = await getAccessTokenSilently();
            const response = await axios.get(
                `http://${API_ENDPOINT}/users?sub=${sub}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            const userInfo = getUserInfo(response);
            setUserInfo(userInfo);
        } catch (e) {
            console.error(`Error getting user: ${e}`);
        }
    };

    const updateUserWithAPI = async (updatedUserInfo) => {
        try {
            const accessToken = await getAccessTokenSilently();
            const response = await axios.put(
                `http://${API_ENDPOINT}/users`,
                {
                    sub: updatedUserInfo.sub,
                    email: updatedUserInfo.email,
                    savedLocations: updatedUserInfo.savedLocations,
                    unitPreference: updatedUserInfo.unitPreference,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            const userInfo = getUserInfo(response);
            setUserInfo(userInfo);
        } catch (e) {
            console.error(`Error updating user: ${e}`);
        }
    };

    const setZipCode = async (zipCode) => {
        try {
            await updateLocationByZipCode(zipCode);
        } catch (e) {
            console.error(`Error updating location: ${e}`);
        }
    };

    return { createUserWithAPI, getUserFromAPI, updateUserWithAPI };
}

export default UserAPI;
