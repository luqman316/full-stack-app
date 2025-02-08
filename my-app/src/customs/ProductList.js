// "use client";
// import React, { useState } from 'react';
// import ProductCard from './ProductCard';  // Import ProductCard component

// const ProductList = () => {
//   const [products, setProducts] = useState([]);  // State to hold products

//   // Function to add product
//   const handleAddProduct = (product) => {
//     setProducts((prevProducts) => [...prevProducts, product]);
//   };

//   return (
//     <div className="product-list-container space-y-6">
//       {/* Map through the products and render ProductCard for each product */}
//       {products.map((product) => (
//         <ProductCard
//           key={product.productId}
//           id={product.productId}
//           category={product.category}
//           imageSrc={product.imageSrc}
//           productName={product.productName}
//           description={product.description}
//           price={product.price}
//           actualPrice={product.actualPrice}
//           stock={product.stock}
//           onAddToCart={(quantity) => console.log('Added to cart with quantity:', quantity)} // You can use this callback for any additional actions
//         />
//       ))}

//       {/* Add a product button (for testing purposes, replace this with actual product data input) */}
//       <button
//         onClick={() => handleAddProduct({
//           productId: '123',
//           category: 'Electronics',
//           imageSrc: 'https://via.placeholder.com/200',
//           productName: 'Sample Product',
//           description: 'A great product',
//           price: '$199.99',
//           actualPrice: '$249.99',
//           stock: 10
//         })}
//         className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
//       >
//         Add Sample Product
//       </button>
//     </div>
//   );
// };

// export default ProductList;


// "use client";
// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard"; // Assuming your ProductCard component is in this file

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   // Fetch products on initial load
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/product');  // Your products endpoint
//       const data = await response.json();
      
//       if (Array.isArray(data)) {
//         setProducts(data);  // Update state with fetched products
//       } else {
//         console.error("Fetched data is not an array:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   return (
//     <div>
//       {products.length > 0 ? (
//         products.map((product) => (
//           <ProductCard key={product.id} {...product} onAddToCart={fetchProducts} />
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;
