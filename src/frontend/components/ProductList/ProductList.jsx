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
      {filteredProducts.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
  );
}
