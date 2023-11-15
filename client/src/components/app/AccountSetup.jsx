import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserInfo } from '@contexts/UserInfoContext';
import styles from '@css/app/account_setup.module.css';

function AccountSetup({ onSubmit }) {
    const { isAuthenticated } = useAuth0();
    const { userInfo } = useUserInfo();
    const [zipCode, setZipCode] = useState(() => {
        if (isAuthenticated) { return userInfo.savedLocations[0]; }
        else { return ''; }
    });
    const [unitPreference, setUnitPreference] = useState('imperial'); // Default to imperial.

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit(zipCode, unitPreference);
    };

    return (
        <div>
            <form className={styles['account-setup-form']} onSubmit={handleOnSubmit}>
                <div className={styles['account-setup-form-group']}>
                    <label className={styles['account-setup-form-label']}>
                        Zip Code:
                        <input
                            type='text'
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className={styles['account-setup-form-input']}
                        />
                    </label>
                </div>

                <div className={styles['account-setup-form-group']}>
                    <label className={styles['account-setup-form-label']}>
                        Unit Preference:
                        <select
                            value={unitPreference}
                            onChange={(e) => setUnitPreference(e.target.value)}
                            className={styles['account-setup-form-select']}
                        >
                            <option value='imperial'>Imperial</option>
                            <option value='metric'>Metric</option>
                        </select>
                    </label>
                </div>

                <button type='submit' className={styles['account-setup-form-button']}>
                    Update
                </button>
            </form>
        </div>
    );
}

export default AccountSetup;
