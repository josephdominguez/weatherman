import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '@contexts/UserInfoContext';
import UserAPI from '@components/utilities/UserAPI';

function Onboarding() {
    const { user } = useAuth0();
    const navigate = useNavigate();
    const { createUserWithAPI } = UserAPI();
    const { updateUserInfo } = useUserInfo();
    const [zipCode, setZipCode] = useState('');
    const [unitPreference, setUnitPreference] = useState('imperial');

    const handleOnboardingSubmit = async () => {
        // Perform any additional validation or data processing here
        const userInfo = { sub: user.sub, email: user.email, zipCode, unitPreference };
        updateUserInfo(userInfo);

        // Save the user info to the server.
        createUserWithAPI(userInfo);

        // Redirect to the desired page (e.g., CompleteForecast)
        navigate('/CompleteForecast');
    };

    return (
        <div>
            <h1>Welcome to our app!</h1>
            <form onSubmit={handleOnboardingSubmit}>
                <label>
                    Zip Code:
                    <input
                        type='text'
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </label>
                <label>
                    Unit Preference:
                    <select
                        value={unitPreference}
                        onChange={(e) => setUnitPreference(e.target.value)}
                    >
                        <option value='imperial'>Imperial</option>
                        <option value='metric'>Metric</option>
                    </select>
                </label>
                <button type='submit'>Complete Onboarding</button>
            </form>
        </div>
    );
}

export default Onboarding;
