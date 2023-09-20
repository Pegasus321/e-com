import React from "react";
import styles from "./Hero.module.css";
import image from "../../assets/image1.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="white-bcg">
      <div className={`container ${styles.hero}`}>
        <article className={styles.content}>
          <h1>
            Isnt this beautifull? <i>I know it IS</i>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, ipsam natus. Magni, harum aliquam animi adipisci et
            recusandae ea iusto veniam sint voluptatibus consequatur explicabo
            fugiat? Aspernatur nihil culpa beatae?
          </p>
          <Link to="/products" className={`btn ${styles.btnHero}`}>
            Shop Now
          </Link>
        </article>
        <article className={styles.imageContainer}>
          <img src={image} alt="" className={styles.image} />
        </article>
      </div>
    </section>
  );
}
