import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllProductsWithCategories } from "../Services/services";

const ProductsContext = createContext(null);

export const useAllProductsContext = () => useContext(ProductsContext);

export default function ProductContextsProvider({ children }) {
  const initialProduct = {
    products: [],
    categories: [],
  };
  const [productState, setProductState] = useState(initialProduct);
  const fetchAllProductsAndCategories = async () => {
    const { products, categories } = await getAllProductsWithCategories();
    setProductState({ ...productState, products, categories });
  };

  useEffect(() => {
    fetchAllProductsAndCategories();
  }, []);

  return (
    <ProductsContext.Provider value={productState}>
      {children}
    </ProductsContext.Provider>
  );
}
