import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className={styles.pricing}>
          <span
            className={
              product.discountedPrice < product.price ? styles.oldPrice : ""
            }
          >
            ${product.price}
          </span>
          {product.discountedPrice < product.price && (
            <span className={styles.discountedPrice}>
              ${product.discountedPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
