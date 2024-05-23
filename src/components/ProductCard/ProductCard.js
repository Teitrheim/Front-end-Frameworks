import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.cardLink}>
      {" "}
      {}
      <div className={styles.card}>
        <img
          src={product.image.url}
          alt={product.title.alt}
          className={styles.image}
        />
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
    </Link>
  );
};

export default ProductCard;
