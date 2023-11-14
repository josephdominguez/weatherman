import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import UserAPI from '@components/utilities/UserAPI';
import ZipCodeManager from '@components/utilities/ZipCodeManager';
import BlankAppPage from '@components/pages/BlankAppPage';
import styles from '@css/onboarding.module.css';

function Onboarding() {
    const { user } = useAuth0();
    const navigate = useNavigate();
    const { createUserWithAPI } = UserAPI();
    const { zipCode, setZipCode } = useState('');
    const { updateZipCode, error } = ZipCodeManager();
    const [unitPreference, setUnitPreference] = useState('imperial');

    const handleOnboardingSubmit = async (e) => {
        e.preventDefault();

        updateZipCode(zipCode);

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
                    <h1 className={styles['onboarding-header']}>Account Setup</h1>
                    <form
                        className={styles['onboarding-form']}
                        onSubmit={handleOnboardingSubmit}
                    >
                        <div className={styles['onboarding-form-group']}>
                            <label className={styles['onboarding-form-label']}>
                                Zip Code:
                                <input
                                    type='text'
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    className={styles['onboarding-form-input']}
                                />
                            </label>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>

                        <div className={styles['onboarding-form-group']}>
                            <label className={styles['onboarding-form-label']}>
                                Unit Preference:
                                <select
                                    value={unitPreference}
                                    onChange={(e) => setUnitPreference(e.target.value)}
                                    className={styles['onboarding-form-select']}
                                >
                                    <option value='imperial'>Imperial</option>
                                    <option value='metric'>Metric</option>
                                </select>
                            </label>
                        </div>

                        <button
                            type='submit'
                            className={styles['onboarding-form-button']}
                        >
                            Complete Onboarding
                        </button>
                    </form>
                </div>
            </div>
        </BlankAppPage>
    );
}

export default Onboarding;
