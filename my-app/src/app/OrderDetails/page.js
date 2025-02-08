"use client";
import AddToCart from '@/customs/AddToCart'
import Login from '@/customs/Login'
import NavBar from '@/customs/NavBar'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image';
import { useEffect, useState } from 'react';

function OrderDetails() {  
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    // Fetch all orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3001/order');
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          console.error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
      setIsLoading(false);
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return <p>Loading orders...</p>;
  }


  return (
   <>
    {/* header section*/}
    <header className='  w-full '>
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

    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Panel - Orders</h1>
      {orders.length > 0 ? (
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 border">Order ID</th>
              <th className="p-4 border">Order Number</th>
              <th className="p-4 border">Email</th>
              <th className="p-4 border">Phone</th>
              <th className="p-4 border">Customer Name</th>
              <th className="p-4 border">Address</th>
              <th className="p-4 border">Payment Method</th>
              <th className="p-4 border">Total Amount</th>
              <th className="p-4 border">Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="p-4 border">{order.id}</td>
                <td className="p-4 border">{order.orderNumber}</td>
                <td className="p-4 border">{order.email}</td>
                <td className="p-4 border">{order.phone}</td>
                <td className="p-4 border">{order.name}</td>
                <td className="p-4 border">{order.address}</td>
                <td className="p-4 border">{order.paymentMethod}</td>
                <td className="p-4 border">${Number(order.totalAmount).toFixed(2)}</td>
                <td className="p-4 border">
                  {order.items.map((item) => (
                    <div key={item.id}>
                      {item.productName} x {item.quantity}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>

   </>
  )
}

export default OrderDetails
