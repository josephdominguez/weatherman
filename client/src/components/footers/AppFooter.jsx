import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from '@contexts/LocationContext';
import { useUserInfo } from '@contexts/UserInfoContext';
import { API_ENDPOINT } from '@config/config';
import Cycle from '@components/Utilities/Cycle';
import styles from '@css/app/footer.module.css';

function AppFooter() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { location } = useLocation();
    const { zipCode } = location;

    const { userInfo } = useUserInfo();
    const { unitPreference } = userInfo;

    const components = ['HumidityDewpointCard', 'CityNameCard', 'ConditionCard'];
    const componentProps = [{weatherData, unitPreference}];

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `http://${API_ENDPOINT}/weather-updates?zipCode=${zipCode}`
            );
            const weatherData = response.data.weatherUpdates;
            setWeatherData(weatherData);
            setError(null);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, [zipCode]);

    if (loading) {
        return (
            <footer className={styles['app-footer']}>
                <div className={styles['footer-container']}></div>
            </footer>
        );
    }

    if (error) {
        return (
            <footer className={styles['app-footer']}>
                <div className={styles['footer-container']}></div>
            </footer>
        );
    }

    return (
        <footer className={styles['app-footer']}>
            <Cycle 
            components={components}
            componentProps={componentProps}
            cycleSpeed={5000}/>
        </footer>
    );
}

export default AppFooter;
