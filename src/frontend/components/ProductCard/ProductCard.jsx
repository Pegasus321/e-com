import React from "react";
import styles from "./ProductCard.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className={styles.productStyle}>
      <div className={styles.imageContainer}>
        <Link to={`/products/${product._id}`}>
          <p>{product.name}</p>
          <p>{product.name}</p>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
    </article>
  );
}
