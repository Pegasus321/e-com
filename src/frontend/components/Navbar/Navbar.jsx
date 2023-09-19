import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const Location = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navCenter}`}>
        <Link to="/">
          <h2 className={styles.logo}>
            DigiCart <i className={styles.logoTheme}>Elec.</i>
          </h2>
        </Link>
        <>
          <p>SearchBar</p>
          <p>Rest</p>
        </>
      </div>
    </nav>
  );
}
