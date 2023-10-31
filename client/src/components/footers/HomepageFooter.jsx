import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@css/homepage/footer.module.css';
import githubIcon from '@images/icons/github.png';

function HomepageFooter() {
  return (
    <footer className={styles['homepage-footer']}>
      <nav className={styles['footer-nav']}>
        <h3>Navigation</h3>
        <div>
          <Link to="/ExtendedForecast">Extended Forecast</Link>
        </div>
        <div>
          <Link to="/LocalForecast">Local Forecast</Link>
        </div>
        <div>
          <Link to="/CurrentConditions">Current Conditions</Link>
        </div>
        <div>
          <Link to="/CompleteForecast">Complete Forecast</Link>
        </div>
      </nav>
      <div className={styles['footer-contact']}>
        <h2>Contact</h2>
        <div>
          <img src={githubIcon} className={styles['icon']} /> {' '}
          <a href="https://github.com/josephdominguez/weatherman">Github Project</a>
        </div>
        <div>
          Made by
          {' '} <img src={githubIcon} className={styles['icon']} /> {' '}
          <a href="https://github.com/josephdominguez">Joseph Dominguez</a>
        </div>
        <div>
          and
          {' '} <img src={githubIcon} className={styles['icon']} /> {' '}
          <a href="https://github.com/kylelarsenlarsen">Kyle Larsen</a>
        </div>
      </div>
    </footer>
  );
}

export default HomepageFooter;
