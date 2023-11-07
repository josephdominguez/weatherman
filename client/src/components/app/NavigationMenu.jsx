import { Link, useLocation } from 'react-router-dom';
import { pages } from '@config/config';
import styles from '@css/app/navigation_menu.module.css';

function NavigationMenu() {
    const location = useLocation();
    return (
        <nav className={styles['navigation-menu']}>
            <h3>Navigation</h3>
            {pages.map((page) => (
                <div key={page.title}>
                    <Link
                        to={page.path}
                        className={
                            location.pathname === page.path
                                ? styles['current-link']
                                : ''
                        }
                    >
                        {page.title}
                    </Link>
                </div>
            ))}
        </nav>
    );
}

export default NavigationMenu;
