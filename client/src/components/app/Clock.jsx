import { useState, useEffect } from 'react';
import styles from '@css/app/clock.module.css';

const Clock = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const updateClock = () => {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric' };

        setTime(now.toLocaleTimeString('en-US'));
        setDate(now.toLocaleDateString('en-US', options));
    };

    useEffect(() => {
        updateClock(); // Initial update

        const intervalId = setInterval(updateClock, 1000);

        return () => {
            clearInterval(intervalId); // Cleanup on unmount
        };
    }, []);

    return (
        <div className={styles['clock']}>
            <div id='date'>{date}</div>
            <div id='time'>{time}</div>
        </div>
    );
};

export default Clock;
