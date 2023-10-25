import React from 'react';
import styles from '@css/homepage/footer.module.css';
import githubIcon from '@images/icons/github.png';

function HomepageFooter() {
  return (
    <footer className={styles['homepage-footer']}>
      <nav className={styles['footer-nav']}>
        <h2>Navigation</h2>
        <div>
          <a href="./extended_forecast.html">Extended Forecast</a>
        </div>
        <div>
          <a href="./local_forecast.html">Local Forecast</a>
        </div>
        <div>
          <a href="./current_conditions.html">Current Conditions</a>
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
