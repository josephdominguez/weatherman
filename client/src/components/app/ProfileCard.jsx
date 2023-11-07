import LogoutButton from '@components/auth/buttons/LogoutButton';
import styles from '@css/local_forecast.module.css';

function ProfileCard() {
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-item']}>
                You can logout now.

                <LogoutButton />
            </div>
        </div>
    );
}

export default ProfileCard;
