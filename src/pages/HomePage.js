// Import necessary hooks and components
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";

const HomePage = () => {
  // State for storing products and handling loading and errors
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const jsonResponse = await response.json();
        setProducts(jsonResponse.data); // Set the products in state
      } catch (err) {
        setError(err.message); // Set error in state if any occurs
      } finally {
        setLoading(false); // Ensure loading is false after the fetch operation
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  // Render the HomePage component
  return (
    <div>
      <h1>Products</h1>
      {loading && <p>Loading products...</p>}
      {error && <p>Error fetching products: {error}</p>}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
