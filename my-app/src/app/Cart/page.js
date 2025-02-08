// Cart/page.js
"use client";
import AddToCart from "@/customs/AddToCart";
import Login from "@/customs/Login";
import NavBar from "@/customs/NavBar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    paymentMethod: '',
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null); // New state for order number
  const [isLoading, setIsLoading] = useState(false);


  // Fetch the cart data on component mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:3001/cart");
        if (response.ok) {
          const cartData = await response.json();
          console.log("Cart Data from API:", cartData); // Log fetched cart data
          setCart(cartData);
          calculateTotal(cartData);
        } else {
          console.error("Failed to fetch cart:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    
    fetchCart();
  }, []);

  // Function to calculate total
  const calculateTotal = (cartData) => {
    const totalAmount = cartData.reduce((sum, item) => {
      const itemPrice = parseFloat(item.price.replace("$", "")); // Convert price to number
      return sum + itemPrice * item.quantity;
    }, 0);
    setTotal(totalAmount);
  };

   // Function to calculate total cart quantity
   const calculateCartQuantity = (cartData) => {
    const quantity = cartData.reduce((sum, item) => sum + item.quantity, 0);
    setCartQuantity(quantity);
  };
  

  // Handle quantity change
  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      );
      calculateTotal(updatedCart);
      return updatedCart;
    });
  };

  // Remove an item
const handleDelete = async (id) => {
  const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

  try {
    const response = await fetch(`http://localhost:3001/cart/${id}`, {
      method: "DELETE", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Product deleted successfully from backend");
      setCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Update front-end state
      alert("Product deleted successfully!");
    } else {
      const errorData = await response.json(); // Check for server error details
      console.error("Failed to delete from backend:", errorData);
      alert("Failed to delete the product from backend!");
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    alert("An error occurred while deleting the product.");
  }
};


  // Handle order form submission
  const handleOrderSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (!orderDetails.name || !orderDetails.address || cart.length === 0) {
      alert("Please fill all order details and add items to the cart.");
      return;
    }

    // Construct the order data
    const orderData = {
      // orderNumber: orderDetails.orderNumber,
      name: orderDetails.name,
      address: orderDetails.address,
      paymentMethod: orderDetails.paymentMethod,
      items: cart,
      totalAmount: total,
      phone: orderDetails.phone,
      email: orderDetails.email,

    };

    try {
      const response = await fetch("http://localhost:3001/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const data = await response.json(); // Extract response data
        if (data.orderNumber)  {
          setOrderNumber(data.orderNumber); // Set order number from response
        }
        toast.success("Order placed successfully!");
        setOrderSuccess(true);

        await fetch("http://localhost:3001/cart", {
          method: "DELETE",
        });
        
        setCart([]); // Clear cart after successful order
        setTotal(0); // Reset total
      } else {
        alert("Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order.");
    }
    setIsLoading(false);
  };

  return (
    <div className=" bg-gray-100 min-h-screen text-black">

      <header className='w-full'>
        <section className='text-white bg-gray-950 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-1 p-6'>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
            <p className='text-[14px] px-5'>Free shopping, 30 days return or refund guarantee.</p>
          </div>
          <div className='flex justify-end items-center text-blue-500 px-5'>
            <Login title='SIGN IN' link='/SignIn' />
            <Login title='SIGN UP' link='/SignUp' />
          </div>
        </section>

        <div className='px-3 bg-[1E1F23] shadow-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
          <div className=''>
            <Image src="/TREND.png" alt='ecommerce logo' height={38} width={160} className='p-3' />
          </div>

          <nav className='flex justify-end'>
            <ul className='flex gap-10 justify-center items-center text-md font-bold'>
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
              <li>
                <AddToCart icon={<FaShoppingCart className='text-black text-2xl' />} link='/Cart' />
              </li>
            </ul>
          </nav>
        </div>
      </header>


    {/* cart items */}
      <div className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6 space-y-4">
    <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

  {/* Heading Row */}
  {cart.length > 0 && (
    <div className="flex items-center justify-between border-b pb-2 font-bold text-gray-700">
      <span className="flex-1 ml-4">Product Name</span>
      <div className="flex items-center space-x-6">
        <span>Quantity</span>
        <span>Price</span>
        <span>Action</span>
      </div>
    </div>
  )}

  {/* Cart mei send  */}
  {cart.length > 0 ? (
    <div className="space-y-6">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b pb-4"
        >
          <span className="hidden">{item.id}</span>
          <span className="font-medium flex-1 ml-4">{item.productName}</span>
          <div className="flex items-center space-x-6">
            <span className="text-gray-700">{item.quantity}</span>
            <span className="text-gray-700 font-semibold">
              {/* {item.price}               */}
              {/* ${(item.price * item.quantity).toFixed(2)} */}
              {`$${(item.price * item.quantity).toFixed(2)}`}
            </span>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-black text-xl hover:underline"
            >
              {/* Remove */}
              <MdDelete />

            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500">Your cart is empty.</p>
  )}

  {/* Total */}
  <div className="mt-6 text-right text-lg font-bold">
    Total: ${total.toFixed(2)}
  </div>
      </div>



      {/* Order Form */}
      {cart.length > 0 && !orderSuccess && (
        <div className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
          <form onSubmit={handleOrderSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-semibold">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded"
                value={orderDetails.name}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, name: e.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold">Address</label>
              <textarea
                required
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                value={orderDetails.address}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, address: e.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold">Phone Number</label>
              <input
                type="number"
                required
                className="w-full p-2 border border-gray-300 rounded"
                value={orderDetails.phone}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, phone: e.target.value }) 
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border border-gray-300 rounded"
                value={orderDetails.email}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, email: e.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold">Payment Method</label>
              <select
                required
                className="w-full p-2 border border-gray-300 rounded"
                value={orderDetails.paymentMethod}
                onChange={(e) =>
                  setOrderDetails({ ...orderDetails, paymentMethod: e.target.value })
                }
              >
                <option value="">Select Payment Method</option>
                {/* <option value="credit_card">Credit Card</option> */}
                <option value="cash_on_delivery">Cash on Delivery</option>
              </select>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-700 text-white rounded"
              >
                Place Order
              </button>
              
            </div>
          </form>
        </div>
      )}

      {isLoading && <p>Placing your order...</p>}

      {orderSuccess && (
        <div className="mt-6 text-center text-green-600">
          <p className="text-xl font-semibold">Order placed successfully!</p>
          <p className="text-md font-medium text-gray-700">     
            Your order number is: <span className="font-bold text-black">{orderNumber}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;



