import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); // Retrieve the product ID from the URL
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
        setProduct(jsonResponse.data); // Assuming the API returns data in this format
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Dependency on id ensures this effect runs when the ID changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product: {error}</p>;

  return (
    <div>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img
            src={product.image.url}
            alt={product.image.alt || "Product image"}
          />
          <p>{product.description}</p>
          <p>Price: ${product.discountedPrice || product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
