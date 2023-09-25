import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./SingleProductPage.module.css";

export default function SingleProductPage() {
  const { productId } = useParams();
  return <main></main>;
}
