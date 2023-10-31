import React from 'react';
import NavigationMenu from '@components/app/NavigationMenu';
import styles from '@css/homepage/footer.module.css';
import githubIcon from '@images/icons/github.png';

function HomepageFooter() {
  return (
    <footer className={styles['homepage-footer']}>
      <NavigationMenu />
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
