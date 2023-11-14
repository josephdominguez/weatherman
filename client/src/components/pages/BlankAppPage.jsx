import styles from '@css/blank_app_page.module.css';

function BlankAppPage({ children }) {
    return (
        <>
            <main className={styles['blank-app-page']}>
                {children}
            </main>
        </>
    );
}

export default BlankAppPage;
