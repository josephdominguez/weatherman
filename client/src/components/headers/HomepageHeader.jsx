import React from 'react';
import '@css/homepage/header.css';

function HomepageHeader() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="./landing.html">
            <img className="logo-image" src="@images/logos/logo.svg" alt="Weather Logo" />
          </a>
        </div>
        <div className="header-links">
          <button className="about-button">About</button>
          <a href="./login.html">
            <button className="signin-button">Sign in</button>
          </a>
        </div>
      </div>
      <div className="header-text">WEATHERSTAR 2084</div>
    </header>
  );
}

export default HomepageHeader;