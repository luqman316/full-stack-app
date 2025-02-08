"use client";
import Image from "next/image";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/router';


export default function ProductCard({
  id,
  category,
  imageSrc,
  productName,
  description,
  price,
  actualPrice,
  stock,
  onAddToCart,
}) {

  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  // const router = useRouter();
  // const validImageSrc = imageSrc && imageSrc.trim() !== "";
  
  const validImageSrc = imageSrc;
  const placeholderImage = "/bgRemove.png";


  const incrementQuantity = () => setQuantity((prev) => prev + 2);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = async () => {
    const product = {
      productId: id,
      quantity,
      price: parseFloat(price.replace("$", "")),
      productName,
    };
    setIsAddingToCart(true); // Show loading indicator
    try {
      const response = await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData); // Log server error message
        throw new Error(errorData.message || "Failed to add item to cart.");
      }
      const data = await response.json();
      console.log("Response data:", data); // Log response data
      alert("Item added to cart!");
      if (onAddToCart) onAddToCart(quantity); // Notify parent component
    } catch (error) {
      console.error("Error in handleAddToCart:", error); // Log error details
      alert(error.message); // Show specific error message
    } finally {
      setIsAddingToCart(false); // Hide loading indicator
    }
  };
  

  return (
    <>
    <div className="p-4 bg-white rounded-3xl shadow-lg  ">
      <span className="category text-xs text-gray-500">{category}</span>
      <div className="imageContainer my-2 flex justify-center items-center bg-transparent rounded-xl">
        <Image
          // src={validImageSrc ? imageSrc : placeholderImage}
          src={validImageSrc ? imageSrc : placeholderImage}
          alt={productName}
          width={200}
          height={200}
          className="object-cover  "
        />
      </div>
      <h2 className="productName text-lg font-semibold text-black">{productName}</h2>
      <p className="productDescription text-sm text-black text-balance">{description}</p>
      <div className="flex space-x-2 my-2">
        <span className="text-xl font-bold text-green-600 animate-bounce  ">{price}</span>
        <span className="line-through text-gray-500 text-xs">{actualPrice}</span>
      </div>
      <div className="stock text-xs text-gray-500">Stock: {stock}</div>

      <div className="quantity flex items-center gap-4 mt-4 text-black">
        <button onClick={decrementQuantity} className="text-xl px-2">
          -
        </button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity} className="text-xl px-2">
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="add-to-cart-button mt-4 w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
        disabled={stock <= 0 || isAddingToCart}
      >
        {isAddingToCart ? "Adding..." : <FaShoppingCart className="text-xl" />}
        <span>{stock > 0 ? "Add To Cart" : "Out of Stock"}</span>
      </button>
      {/* <ToastContainer /> */}
      
    {/* <ToastContainer position="top-right" autoClose={50} /> */}
    </div>

    </>
  );
}




