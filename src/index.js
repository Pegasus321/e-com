import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "normalize.css/normalize.css";
import App from "./App";
import { AuthContextProvider } from "./frontend/contexts";
import myServer from "./mirage-config";
import ProductContextsProvider from "./frontend/contexts/ProductContextsProvider";
import FilterContextProvider from "./frontend/contexts/FilterContextProvider";

myServer({ environment: "development" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextsProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </ProductContextsProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
