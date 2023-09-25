import React, { createContext, useContext, useEffect, useState } from "react";
import { initialFiltersState } from "../reducers/FiltersReducer";
import { useAllProductsContext } from "./ProductContextsProvider";

const FiltersContext = createContext(null);

export const useFiltersContext = () => useContext(FiltersContext);

export default function FilterContextProvider({ children }) {
  const [state, setState] = useState(initialFiltersState);

  const {
    products: productsFromProductsContext,
    categories: categoriesFromCategoriesContext,
  } = useAllProductsContext();

  useEffect(() => {
    setState({ ...state, filteredProducts: productsFromProductsContext });
  }, [productsFromProductsContext]);

  return (
    <FiltersContext.Provider value={{ ...state }}>
      {children}
    </FiltersContext.Provider>
  );
}
