import React from "react";
import styles from "./ProductList.module.css";
import axios from "axios";
import { useAllProductsContext } from "../../contexts/ProductContextsProvider";
import { useFiltersContext } from "../../contexts/FilterContextProvider";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  const { filteredProducts } = useFiltersContext();
  console.log(filteredProducts);

  return (
    <div className={styles.productCenter}>
      <header>
        <p>Product Found</p>
        <p>
          Page 1 of 
        </p>
      </header>
      {filteredProducts.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
  );
}
