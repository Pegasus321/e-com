import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "normalize.css/normalize.css";
import App from "./App";

import { AuthContextProvider } from "./frontend/contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
