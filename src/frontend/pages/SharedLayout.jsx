import React from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";

import { Navbar, Footer } from "../components/Index";

export default function SharedLayout() {
  return (
    <div>
      <Loader isLoading={false} />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
