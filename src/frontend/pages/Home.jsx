import React from "react";
import { Categories, FeaturedProducts, Hero } from "../components/Index";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </main>
  );
}
