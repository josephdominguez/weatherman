import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useUserInfo } from '@contexts/UserInfoContext';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '@config/config';
import Callback from '@components/pages/Callback';

function SignUpCallback() {
    const { isAuthenticated, user } = useAuth0();
    const { updateUserInfo } = useUserInfo();
    const navigate = useNavigate();

    const createUserWithAPI = async () => {
        try {
            const response = await axios.post(
                `http://${API_ENDPOINT}/users`,
                {
                    sub: user.sub,
                    email: user.email,
                    savedLocations: ['84093', '12345'],
                    unitPreference: 'imperial',
                },
                {
                    headers: {
                        Authorization: `Bearer ${user?.authToken}`,
                    },
                }
            );
            const { sub, email, savedLocations, unitPreference } = response.data;
            const userInfo = { sub, email, savedLocations, unitPreference };
            updateUserInfo({ ...userInfo });
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            createUserWithAPI().then(() => {
                navigate('/CompleteForecast');
            });
        }
    }, [isAuthenticated, updateUserInfo, navigate]);

    return <Callback />;
}

export default SignUpCallback;
