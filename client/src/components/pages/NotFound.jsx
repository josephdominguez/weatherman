import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@css/not_found.module.css';

function NotFound() {
    return (
        <> 
            <main className={styles['not-found-page']}>
                <div className={styles['not-found-container']}>
                    <h2>404 - Page Not Found</h2>
                    <Link to="/">Go back to the homepage</Link>
                </div>
            </main>
        </>
    );
}

export default NotFound;
