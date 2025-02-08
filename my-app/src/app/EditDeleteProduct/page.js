"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import AddToCart from '@/customs/AddToCart';
import Login from '@/customs/Login';
import NavBar from '@/customs/NavBar';

function EditDeleteProduct() {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/product');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error(error);
        alert('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  // Handle delete product
  const handleDelete = async (productId) => {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3001/product/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Product deleted successfully');
        setProducts(products.filter((product) => product.id !== productId));
      } else {
        throw new Error('Failed to delete product');
      }
    } catch (error) {
      console.error(error);
      alert('Error deleting product');
    }
  };

  // Handle edit product
  const handleEdit = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
  };

  // Update product in backend
  const handleUpdate = async (updatedProduct) => {
    try {
      const response = await fetch(`http://localhost:3001/product/${updatedProduct.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        alert('Product updated successfully');
        setProducts(
          products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setIsEditing(false);
        setCurrentProduct(null);
      } else {
        throw new Error('Failed to update product');
      }
    } catch (error) {
      console.error(error);
      alert('Error updating product');
    }
  };

  return (
    <>
    {/* header section*/}
    <header className='  max-w '>
      <section className='text-white bg-gray-950  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-center  gap-1 p-6  '>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1' >
          <p className='text-[14px] px-5'>Free shopping, 30 days return or refund guarantee.</p>
        </div>
        <div className='flex justify-end items-center  text-blue-500 px-5'>
          <Login title='SIGN IN' link='/SignIn' />
          <Login title='SIGN UP' link='/SignUp' />
        </div>
      </section>

      <div className='px-3 bg-[1E1F23] shadow-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
        <div className=''>
          <Image src="/TREND.png" alt='ecommerce logo' height={38} width={160} className='p-3 ' />  
        </div>

        <nav className='flex justify-end' >
          <ul className='flex gap-10 justify-center items-center text-md font-bold '>
            <li className='hover:underline hover:to-black hover:cursor-pointer transition duration-200'>
              <NavBar title='Home' link='/Home' />
            </li>
            <li className='hover:underline'>
              <NavBar title='About' link='/About' />
            </li>
            <li className='hover:underline'>
              <NavBar title='Product' link='/Product' />
            </li>
            <li className='hover:underline'>
              <NavBar title='Contact' link='/Contact' />
            </li>
            {/* <li className='hover:underline'>
              <NavBar title='Add' link='/AdminPage' />
            </li> */}
            <li>            
              <AddToCart icon={<FaShoppingCart className='text-black text-2xl ' />} link='/Cart' />
            </li>
          </ul>
        </nav>
      </div>
    </header>

      {/* Admin Product List */}
      <div className="max-w mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Admin - Manage Products</h2>
        <table className="table-auto w-full text-left bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Actual Price</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>

            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.actualPrice}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">{product.description}</td>
                <td className="px-4 py-2 truncate max-w-[200px]">{product.imageSrc}</td>
                <td className="px-4 py-2 space-x-2">
                    <div className='grid'>
                        <button
                          onClick={() => handleEdit(product)}
                          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-950"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-rose-950"
                        >
                          Delete
                        </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isEditing && currentProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg  w-[700px]">
            <h3 className="text-lg font-bold mb-4">Edit Product</h3>
            <div className='grid grid-cols-2'>
            <label>Product Name</label>
            <input
              type="text"
              value={currentProduct.name}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, name: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md mb-4"
            />

            <label>Category</label>
            <input
              type="text"
              value={currentProduct.category}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, category: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md mb-4"
            />

            <label>Price</label>
            <input
              type="text"
              value={currentProduct.price}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, price: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md mb-4"
            />

            <label>Actual Price</label>
            <input
              type="text"
              value={currentProduct.actualPrice}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, actualPrice: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md mb-4"
            />

            <label>Stock</label>
            <input
              type="text"
              value={currentProduct.stock}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, stock: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md mb-4"
            />

            <label>Description</label>
            <input
              type="text"
              value={currentProduct.description}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, description: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md mb-4"
            />

            <label>Image</label>
            <input
              type="text"
              value={currentProduct.imageSrc}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, imageSrc: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md mb-4"
            />



            {/* Add other fields similarly */}
            <button
              onClick={() => handleUpdate(currentProduct)}
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Update
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentProduct(null);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>

            </div>
            
          </div>
        </div>
      )}
    </>
  );
}

export default EditDeleteProduct;
