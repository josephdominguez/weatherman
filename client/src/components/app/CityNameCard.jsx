import styles from '@css/app/footer.module.css';

function CityNameCard({ weatherData }) {
    return (
        <>
            <div className={styles['footer-item']}>
                Conditions at {weatherData.city}
            </div>
        </>
    );
}

export default CityNameCard;
