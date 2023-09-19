import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../../constants/constants";
import styles from "./Footer.module.css";

export default function Footer() {
  const presentYear = new Date().getFullYear();
  return (
    <section className={styles.footer}>
      <div className={styles.linksContainer}>
        {FOOTER_LINKS.map((item) => (
          <Link key={item.id} to={item.url} target="_blank">
            {item.icon}
          </Link>
        ))}
      </div>
      <div className={styles.copyrightDiv}>
        <span>@ {presentYear}</span>
        <div className={styles.digiDiv}>
          <div className={styles.digi}>DigiCart Elec.</div>
          <div className={styles.tooltip}>Nothing here!</div>
        </div>
      </div>
    </section>
  );
}
