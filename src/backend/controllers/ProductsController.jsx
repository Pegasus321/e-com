import { Response } from "miragejs";
import { status_200 } from "../../frontend/constants/constants";
import { status_500 } from "../../frontend/constants/constants";

export const getAllProducts = function () {
  return new Response(200, {}, { products: this.db.products });
};

export const getProductHandler = function (schema, request) {
  try {
    return new Response(
      status_200,
      {},
      schema.products.findBy({ _id: request.params.productId })
    );
  } catch (err) {
    return new Response(
      status_500,
      {},
      { error: err.message || "An error occuered" }
    );
  }
};

//left
export const searchProductsHandler = function (schema, request) {};
