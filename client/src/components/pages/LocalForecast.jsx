import React from 'react';
import AppHeader from '@components/headers/AppHeader';
import AppFooter from '@components/footers/AppFooter';
import styles from '@css/local_forecast.module.css';

function LocalForecast() {
    return (
        <> 
            <AppHeader />

            <main className={styles['local-forecast-main']}>
                <div className={`${styles['local-forecast-container']} gradient-border`}>
                    <div className={styles['local-forecast-item']}>
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
            </main>

            <AppFooter />
        </>
    );
}

export default LocalForecast;