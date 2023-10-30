import React from 'react';
import styles from '@css/local_forecast.module.css';

const LocalForecastCard = () => {
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-item']}>
                <div className={styles['forecast']}>
                    .SYNOPSIS...A COLD EARLY SEASON STORM SYSTEM WILL MOVE THROUGH
                    UTAH AND SOUTHWEST WYOMING TONIGHT THROUGH THURSDAY. THIS WILL
                    BRING VALLEY RAIN AND SIGNIFICANT MOUNTAIN SNOW TO PRIMARILY
                    NORTHERN UTAH, ALONG WITH THE COLDEST TEMPERATURES OF THE FALL
                    SEASON SO FAR. HIGH PRESSURE WILL RETURN FRIDAY, BRINGING A
                    GRADUAL WARMING TREND THROUGH THE WEEKEND. {' '}
                    &&
                    .SHORT TERM (THROUGH 12Z THURSDAY)...A BROAD STORM SYSTEM IS
                    MOVING ONSHORE ALONG
                </div>
            </div>
        </div>
    );
};

export default LocalForecastCard;