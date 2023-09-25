import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article>
      <div>
        <Link to={`/products/${product._id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
    </article>
  );
}
