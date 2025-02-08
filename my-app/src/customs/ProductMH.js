// "use client";
// import React, { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";

// export default function ProductMH({
//   id,
//   category,
//   imageSrc,
//   productName,
//   description,
//   price,
//   actualPrice,
//   stock,
// }) {
//   const [quantity, setQuantity] = useState(1);

// //   const placeholderImage = "/bgRemove.png";

//   const incrementQuantity = () => setQuantity((prev) => prev + 1);
//   const decrementQuantity = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleAddToCart = () => {
//     // const product = {
//     //   productId: id,
//     //   quantity,
//     //   price: parseFloat(price.replace("$", "")),
//     //   productName,
//     // };

//     // console.log("Adding product to cart:", product);
//     alert("Move product section to buy the products!");
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-lg">
//       <span className="category text-xs text-gray-500">{category}</span>
//       <div className="imageContainer my-2 flex justify-center items-center bg-transparent">
//         <img
//           src={imageSrc}
//           alt={productName}
//           width="200"
//           height="200"
//           className="object-cover"
//         />
//       </div>
//       <h2 className="productName text-lg font-semibold text-black">{productName}</h2>
//       <p className="productDescription text-sm text-black">{description}</p>
//       <div className="productPrice flex space-x-2 my-2">
//         <span className="text-xl font-bold text-green-600 animate-bounce">{price}</span>
//         <span className="line-through text-gray-500">{actualPrice}</span>
//       </div>
//       <div className="stock text-xs text-gray-500">Stock: {stock}</div>

//       <div className="quantity flex items-center gap-4 mt-4 text-black">
//         <button onClick={decrementQuantity} className="text-xl px-2">
//           -
//         </button>
//         <span>{quantity}</span>
//         <button onClick={incrementQuantity} className="text-xl px-2">
//           +
//         </button>
//       </div>

//       <button
//         onClick={handleAddToCart}
//         className="add-to-cart-button mt-4 w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
//         disabled={stock <= 0}
//       >
//         <FaShoppingCart className="text-xl" />
//         <span>{stock > 0 ? "Add To Cart" : "Out of Stock"}</span>
//       </button>
//     </div>
//   );
// }
