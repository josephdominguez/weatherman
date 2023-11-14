import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import UserAPI from '@components/utilities/UserAPI';
import Callback from '@components/pages/Callback';
import { useUserInfo } from '@contexts/UserInfoContext';
import ZipCodeManager from '@components/utilities/ZipCodeManager';

function LoginCallback() {
    const { user } = useAuth0();
    const { getUserFromAPI } = UserAPI();
    const navigate = useNavigate();

    useEffect(() => {
        getUserFromAPI(user.sub)
            .then(() => {
                // Redirect to application upon successful login.
                navigate('/CompleteForecast');
            })
            .catch(() => {
                // Handle any errors or redirect to the homepage.
                navigate('/');
            });
    }, [user.sub, getUserFromAPI, navigate]);

    return <Callback />;
}

export default LoginCallback;
