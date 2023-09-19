import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";

import Loader from "./frontend/components/Loader";

import ProductListingPage from "./frontend/pages/ProductListingPage/ProductListingPage";
import Home from "./frontend/pages/Home";
const SharedLayout = lazy(() => import("./frontend/pages/SharedLayout"));

const Fallback = () => {
  return (
    <>
      <main className="full-page"></main>
      {/* <Loader /> */}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Fallback />}>
                <SharedLayout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<Fallback />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="products"
              element={
                <Suspense fallback={<Fallback />}>
                  <ProductListingPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
