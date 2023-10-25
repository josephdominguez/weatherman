import React from 'react';
import '@css/homepage/footer.css';

function HomepageFooter() {
  return (
    <footer>
      <nav className="footer-nav">
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
      <div className="footer-contact">
        <h2>Contact</h2>
        <div>
          <img src="@images/icons/github.png" className="icon" />
          <a href="https://github.com/josephdominguez/weatherman">Github Project</a>
        </div>
        <div>
          Made by
          <img src="./images/icons/github.png" className="icon" />
          <a href="https://github.com/josephdominguez">Joseph Dominguez</a>
        </div>
        <div>
          and
          <img src="./images/icons/github.png" className="icon" />
          <a href="https://github.com/kylelarsenlarsen">Kyle Larsen</a>
        </div>
      </div>
    </footer>
  );
}

export default HomepageFooter;