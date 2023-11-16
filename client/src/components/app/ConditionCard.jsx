import styles from '@css/app/footer.module.css';

function ConditionCard({ weatherData }) {
    return (
        <>
            <div className={styles['footer-item']}>
                {weatherData.condition}
            </div>
        </>
    );
}

export default ConditionCard;
