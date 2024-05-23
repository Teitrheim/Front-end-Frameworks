// import React, { useState, useEffect } from "react";
// import styles from "./SearchBar.module.css";

// const SearchBar = ({ products, onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const results = products.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     onSearch(results);
//   }, [searchTerm, products, onSearch]);

//   return (
//     <input
//       type="text"
//       className={styles.searchBar}
//       placeholder="Search products..."
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//     />
//   );
// };

// export default SearchBar;
