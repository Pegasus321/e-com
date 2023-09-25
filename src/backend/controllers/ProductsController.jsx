import { Response } from "miragejs";
import { status_200 } from "../../frontend/constants/constants";
import { status_500 } from "../../frontend/constants/constants";

export const getAllProducts = function () {
  return new Response(200, {}, { products: this.db.products });
};

export const getProductHandler = function (schema, request) {
  try {
    return new Response(
      JSON.stringify(schema.products.findby({ id: request.params.productId })),
      status_200
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "An error occuered" }),
      status_500
    );
  }
};

//left
export const searchProductsHandler = function (schema, request) {};
