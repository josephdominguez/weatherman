import LogoutButton from '@components/auth/buttons/LogoutButton';
import styles from '@css/local_forecast.module.css';
import { useUserInfo } from '@contexts/UserInfoContext';

function ProfileCard() {
    const { userInfo } = useUserInfo();

    return (
        <div className={styles['card-container']}>
            <div className={styles['card-item']}>
                <div>sub: {userInfo.sub}</div>
                <div>email: {userInfo.email}</div>
                <div>savedLocations: {userInfo.savedLocations}</div>
                <div>unitPreference: {userInfo.unitPreference}</div>
                You can logout now.
                <LogoutButton />
            </div>
        </div>
    );
}

export default ProfileCard;
