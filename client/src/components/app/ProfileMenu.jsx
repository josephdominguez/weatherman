import { useAuth0 } from '@auth0/auth0-react';
import { useUserInfo } from '@contexts/UserInfoContext';
import UserAPI from '@components/utilities/UserAPI';
import AccountSetup from '@components/app/AccountSetup';
import LogoutButton from '@components/auth/buttons/LogoutButton';
import styles from '@css/app/profile.module.css';

function ProfileMenu() {
    const { user } = useAuth0();
    const { updateUserWithAPI } = UserAPI();
    const { userInfo } = useUserInfo();

    const handleProfileSubmit = async (zipCode, unitPreference) => {
        const updatedUserInfo = {
            sub: user.sub,
            email: user.email,
            savedLocations: zipCode,
            unitPreference: unitPreference,
        };
        updateUserWithAPI(updatedUserInfo);
    };

    return (
        <div className={styles['profile-container']}>
            <h2>User Info</h2>
            <div className={styles['user-info-container']}>
                Email: {userInfo.email || 'N/A'}
                <AccountSetup onSubmit={handleProfileSubmit} />
            </div>
            <div className={styles['logout-container']}>
                <LogoutButton />
            </div>
        </div>
    );
}

export default ProfileMenu;
