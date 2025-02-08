"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../components/ProductCard";

export default function App() {
  const router = useRouter();

  const handleAddToCart = (product, quantity) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = (() => {
      const existingProduct = existingCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return existingCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...existingCart, { ...product, quantity }];
    })();

    // Cart ko localStorage mein save karen
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-4 text-black">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard
          id={1}
          category="Electronics"
          imageSrc="/path/to/image1.jpg"
          productName="Smartphone"
          description="A high-quality smartphone."
          price="999 PKR"
          actualPrice="1200 PKR"
          stock={10}
          onAddToCart={(quantity) =>
            handleAddToCart(
              {
                id: 1,
                productName: "Smartphone",
                price: "999 PKR",
              },
              quantity
            )
          }
        />
        <ProductCard
          id={2}
          category="Accessories"
          imageSrc="/path/to/image2.jpg"
          productName="Headphones"
          description="Noise-cancelling headphones."
          price="499 PKR"
          actualPrice="700 PKR"
          stock={15}
          onAddToCart={(quantity) =>
            handleAddToCart(
              {
                id: 2,
                productName: "Headphones",
                price: "499 PKR",
              },
              quantity
            )
          }
        />
      </div>

      <button
        onClick={() => router.push("/cart")}
        className="mt-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go to Cart
      </button>
    </div>
  );
}
