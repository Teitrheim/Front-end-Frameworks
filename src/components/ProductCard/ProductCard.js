import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
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
        <Link
          to={`/product/${product.id}`}
          className={styles.viewProductButton}
        >
          View product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
