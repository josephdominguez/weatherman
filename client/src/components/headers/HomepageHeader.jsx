import React from 'react';
import { Link } from 'react-router-dom';
import '@css/homepage/header.css';
import WeathermanLogo from '@images/logos/logo.svg';

function HomepageHeader() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img className="logo-image" src={WeathermanLogo} alt="Weather Logo" />
          </Link>
        </div>
        <div className="header-links">
          <button className="about-button">About</button> {' '}

          <Link to="/Login">
            <button className="signin-button">Sign in</button>
          </Link>
        </div>
      </div>
      <div className="header-text">WEATHERSTAR 2084</div>
    </header>
  );
}

export default HomepageHeader;
