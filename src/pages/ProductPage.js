import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        const jsonResponse = await response.json();
        setProduct(jsonResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product: {error}</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className={styles.card}>
        <img
          src={product.image.url}
          alt={product.image.alt || "Product image"}
        />
        <div className={styles.cardContainer}>
          {" "}
          {}
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>
            ${product.discountedPrice || product.price}
          </p>
          <p className={styles.description}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
