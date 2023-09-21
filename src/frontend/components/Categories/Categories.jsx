import React, { useEffect } from "react";
import styles from "./Catrgories.module.css";
import axios from "axios";

export default function Categories() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products") // Note: Use the full URL with http://
      .then((res) => {
        console.log(res.data); // Access the data directly
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return <div>Categories</div>;
}
