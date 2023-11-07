import { useEffect } from 'react';
import Spinner from '@components/utilities/Spinner';
import styles from '@css/callback.module.css';

function Callback() {
    useEffect(() => {}, []);

    return (
        <>
            <div className={styles['callback-container']}>
                <Spinner />
            </div>
        </>
    );
}

export default Callback;
