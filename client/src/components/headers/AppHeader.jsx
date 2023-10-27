import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "@css/app/header.module.css";
import WeathermanLogo from "@images/logos/logo.svg";
import "@scripts/clock.js";

function AppHeader({ pageTitle, location }) {
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    setCurrentLocation(location);
  }, [location]);

  return (
    <header className={styles["app-header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-item"]}>
          <div>
            <Link to="/">
              <img
                className={styles["logo"]}
                src={WeathermanLogo}
                alt="Weather Logo"
              />
            </Link>
          </div>
          <div>
            {currentLocation && (
              <>
                <div>{currentLocation}'s</div>
                <div>{pageTitle}</div>
              </>
            )}
            {!currentLocation && (
              <>
                <div>{pageTitle}</div>
              </>
            )}
          </div>
        </div>

        <div className={styles["header-item"]}>
          <div className={styles["clock"]}>
            <div id="time">0:00:00 AM</div>
            <div id="date">Sun, Jan 1</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
