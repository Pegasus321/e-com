import axios from "axios";

// export const loginUserServive = async (ueserData) => {
//   const response = await axios.post("api/auth/login", {
//     ...ueserData,
//   });

//   if (response.status == 200 || response.status == 201) {
//     const { encodedToken, foundUser } = response.data;

//     return {
//       user: foundUser,
//       token: encodedToken,
//     };
//   }
// };

export const getAllProductsWithCategories = async () => {
  const productPromise = axios.get("/api/products");
  const categoryPromise = axios.get("/api/categories");
  const [productsResponse, categoriesResponse] = await Promise.all([
    productPromise,
    categoryPromise,
  ]);

  const { products } = productsResponse.data;
  const { categories } = categoriesResponse.data;

  return { products, categories };
};

export const getSingleProduct = async (productId) => {
  const {
    status,
    data: { product },
  } = await axios.get(`/api/products/${productId}`);
  if (!product) {
    throw new Error("Error: Product Not Found");
  }
  if (status === 200 || status === 201) {
    return product;
  }
};
