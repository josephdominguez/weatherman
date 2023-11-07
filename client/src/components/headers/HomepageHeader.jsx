import { Link } from 'react-router-dom';
import ZipCodeSearch from '@components/app/ZipCodeSearch';
import WeathermanLogo from '@images/logos/logo.svg';
import { GoPersonFill } from 'react-icons/go';
import HeroVideo from '@videos/hero_video.mp4';
import styles from '@css/homepage/header.module.css';

function HomepageHeader() {
  return (
    <header className={styles['homepage-header']}>
        <div className={styles['background-video']}>
          <video autoPlay muted loop className={styles['header-video']}>
            <source src={HeroVideo} type="video/mp4" />
          </video>
        </div>
        <div className={styles['header-container']}>

        <div className={styles['logo']}>
          <Link to="/">
            <img className={styles['logo-image']} src={WeathermanLogo} alt="Weather Logo" />
          </Link>
        </div>
        <div>
          <Link to="/Login">
            <GoPersonFill className={styles['user-button']} />
          </Link>
        </div>
      </div>

      <ZipCodeSearch />
    </header>
  );
}

export default HomepageHeader;
