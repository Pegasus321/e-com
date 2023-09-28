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
        <h3 className="">{name}</h3>

        <div className={styles.price}>{price}</div>

        <p className="styles.description">{description}</p>

        <div className={styles.row}>
          <span>Available:</span>
          <p></p>
        </div>

        <div className={styles.row}>
          <span>Shipping Available:</span>
          <p>yes</p>
        </div>

        <div className={styles.row}>
          <span>Category:</span>
          <p>{category}</p>
        </div>

        <div className={styles.row}>
          <span>Company:</span>
          <p>{company}</p>
        </div>

        <div className={styles.row}>
          <span>Colors:</span>
        </div>
        <div className={styles.row}>
          <span>In stock:</span>
          <p>yes</p>
        </div>

        <hr />
        <div className="btn-container">
          <button>Add to cart</button>
        </div>
      </div>
    </main>
  );
}
