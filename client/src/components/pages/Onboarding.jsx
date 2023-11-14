import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import UserAPI from '@components/utilities/UserAPI';
import BlankAppPage from '@components/pages/BlankAppPage';
import AccountSetup from '@components/app/AccountSetup';
import styles from '@css/onboarding.module.css';

function Onboarding() {
    const { user } = useAuth0();
    const { createUserWithAPI } = UserAPI();
    const navigate = useNavigate();

    const handleOnboardingSubmit = async (zipCode, unitPreference) => {
        const newUserInfo = {
            sub: user.sub,
            email: user.email,
            savedLocations: zipCode,
            unitPreference: unitPreference,
        };
        createUserWithAPI(newUserInfo);
        navigate('/CompleteForecast');
    };

    return (
        <BlankAppPage>
            <div className={styles['card-container']}>
                <div className={styles['onboarding-container']}>
                    <h1>Onboarding</h1>
                    <AccountSetup onSubmit={handleOnboardingSubmit} />
                </div>
            </div>
        </BlankAppPage>
    );
}

export default Onboarding;
