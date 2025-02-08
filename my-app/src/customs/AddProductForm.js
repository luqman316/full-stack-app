// components/AddProductForm.js
"use client";
import { useState } from 'react';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: "$",
    description: '',
    category: '',
    imageSrc: '',
    actualPrice: "$",
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Product added successfully!');
        console.log(result);
      } else {
        throw new Error('Error adding product');
      }
    } catch (error) {
      console.error(error);
      alert('Error adding product!');
    }
  };

  return (
    <>
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl mt-10 text-black">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Price</label>
          <input
            type=""
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="imageSrc"
            value={productData.imageSrc}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Actual Price</label>
          <input
            type=""
            name="actualPrice"
            value={productData.actualPrice}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-5 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
      </form>
    </div>
    </>
  );
};

export default AddProductForm;
