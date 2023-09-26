import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./SingleProductPage.module.css";
import { getSingleProduct } from "../../Services/services";

export default function SingleProductPage() {
  const { productId } = useParams();

  const [singleProductState, setSingleProductState] = useState({
    singleProductData: [],
  });

  const fetchSingleProduct = async () => {
    try {
      const product = await getSingleProduct(productId);
      setSingleProductState({ singleProductData: product });
    } catch (err) {
      console.error(err.response);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [productId]);

  const { singleProductData } = singleProductState;

  const {
    _id: singlePageProductId,
    name,
    price,
    originalPrice,
    image,
    colors,
    company,
    description,
    category,
    isShippingAvailable,
    stock,
    reviewCount,
    stars,
  } = singleProductData;

  return (
    <main className={`container half-page ${styles.page}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <div>{price}</div>
      </div>
    </main>
  );
}
