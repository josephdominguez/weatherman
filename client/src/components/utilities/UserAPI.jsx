import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserInfo } from '@contexts/UserInfoContext';
import { API_ENDPOINT } from '@config/config';

function UserAPI() {
    const { user } = useAuth0();
    const { updateUserInfo } = useUserInfo();

    // Extracts user info from response body.
    const _getUserInfo = (response) => {
        const { sub, email, savedLocations, unitPreference } = response.data;
        const userInfo = { sub, email, savedLocations, unitPreference };
        return userInfo;
    };

    const createUserWithAPI = async (newUserInfo) => {
        try {
            const response = await axios.post(
                `http://${API_ENDPOINT}/users`,
                {
                    sub: newUserInfo.sub,
                    email: newUserInfo.email,
                    savedLocations: newUserInfo.zipCode,
                    unitPreference: newUserInfo.unitPreference,
                },
                {
                    headers: {
                        Authorization: `Bearer ${user?.authToken}`,
                    },
                }
            );
            const userInfo = _getUserInfo(response);
            updateUserInfo({ ...userInfo });
        } catch (e) {
            console.error(`Error creating user: ${e}`);
        }
    };

    const getUserFromAPI = async (sub) => {
        try {
            const response = await axios.get(
                `http://${API_ENDPOINT}/users`,
                { params: { sub: sub } },
                {
                    headers: {
                        Authorization: `Bearer ${user?.authToken}`,
                    },
                }
            );
            const userInfo = _getUserInfo(response);
            updateUserInfo({ ...userInfo });
        } catch (e) {
            console.error(`Error getting user: ${e}`);
        }
    };

    return { createUserWithAPI, getUserFromAPI };
}

export default UserAPI;
