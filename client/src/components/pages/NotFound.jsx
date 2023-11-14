import { Link } from 'react-router-dom';
import BlankAppPage from '@components/pages/BlankAppPage';
import styles from '@css/not_found.module.css';

function NotFound() {
    return (
        <BlankAppPage>
            <div className={styles['not-found-container']}>
                <h2>404 - Page Not Found</h2>
                <Link to='/'>Go back to the homepage</Link>
            </div>
        </BlankAppPage>
    );
}

export default NotFound;
