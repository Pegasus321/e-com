import React from "react";
import styles from "./ProductListingPage.module.css";
import { ProductList, SideFilters } from "../../components/Index";

export default function ProductListingPage() {
  return (
    <main>
      <SideFilters />
      <ProductList />
    </main>
  );
}
