import { Response } from "miragejs";
import { status_200, status_500 } from "../../frontend/constants/constants";

export const getAllCategories = function () {
  return new Response(status_200, {}, { categories: this.db.categories });
  // } catch (err) {
  //   return new Response(
  //     JSON.stringify({ error: err.message || "An error occuered" }),
  //     status_500
  //   );
  // }
};
