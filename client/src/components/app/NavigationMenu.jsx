import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { pages } from '@config/config';
import styles from '@css/app/navigation_menu.module.css'

const NavigationMenu = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className={styles['navigation-menu']}>
        <h3>Navigation</h3>
        {pages.map((page) => (
            <div>
                <Link to={page.path} 
                className={location.pathname === page.path ? styles['current-link'] : ''}
                >
                    {page.title}
                </Link>
            </div>
        ))}
    </nav>
  );
};

export default NavigationMenu;
