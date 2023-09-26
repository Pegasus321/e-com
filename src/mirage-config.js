import { RestSerializer, Server, Model } from "miragejs";

import { products } from "./backend/db/products";
import { categories } from "./backend/db/categories";
import {
  getAllProducts,
  getProductHandler,
} from "./backend/controllers/ProductsController";
import { getAllCategories } from "./backend/controllers/CategoriesController";

export default function myServer({ environment = "development" }) {
  return new Server({
    serializer: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
    },
    seeds(server) {
      products.forEach((item) => {
        server.create("product", { ...item });
      });

      categories.forEach((item) => {
        server.create("category", { ...item });
      });
    },
    routes() {
      this.namespace = "api";

      //publice routes
      //products routes
      this.get("/products", getAllProducts.bind(this));
      this.get("/products/:productId", getProductHandler.bind(this));

      //categories routes
      this.get("/categories", getAllCategories.bind(this));
    },
  });
}
