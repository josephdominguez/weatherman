import styles from '@css/app/footer.module.css';

function BarometricPressureCard({ weatherData, unitPreference }) {
    return (
        <div className={styles['footer-item']}>
            {unitPreference === 'imperial' &&
                `Barometric Pressure: ${weatherData.pressureIN} in`}
            {unitPreference === 'metric' &&
                `Barometric Pressure: ${weatherData.pressureMB} mb`}
        </div>
    );
}

export default BarometricPressureCard;
