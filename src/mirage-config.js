import { RestSerializer, Server, Model } from "miragejs";

import { products } from "./backend/db/products";

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
    },
    routes() {
      this.namespace = "api";
      this.get("/products", (schema) => {
        return schema.products.all();
      });
    },
  });
}
