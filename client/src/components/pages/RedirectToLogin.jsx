import Spinner from '@components/utilities/Spinner';
import styles from '@css/redirect_to_login.module.css';

function RedirectToLogin() {
    return (
        <>
            <div className={styles['redirect-login-container']}>
                <Spinner />
            </div>
        </>
    );
}

export default RedirectToLogin;
