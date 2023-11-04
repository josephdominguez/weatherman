import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from '@contexts/LocationContext';
import Options from '@components/modals/Options';
import styles from '@css/app/header.module.css';
import WeathermanLogo from '@images/logos/logo.svg';
import '@scripts/clock.js';

function AppHeader({ pageTitle }) {
  const { location } = useLocation();
  const [city, setCity] = useState(location.city);

  useEffect(() => {
    setCity(location.city);
  }, [location.city]);

  return (
    <header className={styles['app-header']}>
      <div className={styles['app-header-container']}>
        <div className={styles['app-header-item']}>
          <div className={styles['page-title']}>
            <Link to="/">
              <img
                className={styles['logo']}
                src={WeathermanLogo}
                alt="Weather Logo"
              />
            </Link>
          </div>
          <div className={styles['location-container']}>
            {city && (
              <>
                <div>{city}&apos;s <br/> {pageTitle}</div>
              </>
            )}
            {!city && (
              <>
                <div>{pageTitle}</div>
              </>
            )}
          </div>
        </div>

        <div className={styles['app-header-item']}>
          <div className={styles['app-header-item-column']}>
            <div className={styles['options-gear']}>
              <Options />
            </div>
            <div className={styles['clock']}>
              <div id="time">0:00:00 AM</div>
              <div id="date">Sun, Jan 1</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
