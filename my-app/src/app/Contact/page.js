"use client";
import AddToCart from '@/customs/AddToCart';
import Login from '@/customs/Login';
import NavBar from '@/customs/NavBar';
import Image from 'next/image';
import { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';

function MainPage({ Component, pageProps }) {

  const [formData, setFormData] = useState({
    name: '',
    fathername: '',
    email: '',
    phone: '',
    nature: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Form Submitted Successfully! We will contact you shortly. Thank you for your interest in our products.");
        setFormData({ name: "", email: "",fathername: "", phone: "", natureOfContact: "", message: "" });
      } else {
        alert(`Error: ${result.message || "Something went wrong!"}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <>
    {/* Header Section */}
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
          <Image src="/TREND.png" alt='ecommerce logo' height={38} width={160} className='p-3' />  
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
            <li className='hover:underline'>
              <NavBar title='Add' link='/AdminPage' />
            </li>
            <li>            
              <AddToCart icon={<FaShoppingCart className='text-black text-2xl' />} link='/Cart' />
            </li>
          </ul>
        </nav>
      </div>
    </header>

    

    <main className="py-10 px-6">
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 text-center">Contact Us</h2>
            <div>
              <label htmlFor="name" className="block text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="fathername" className="block text-gray-700">Your fatherName</label>
              <input
                type="text"
                id="fathername"
                required
                value={formData.fathername}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Mobile</label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <label htmlFor="nature" className="block text-gray-700">Nature of Contact</label>
              <select
                id="nature"
                value={formData.nature}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="">--Select--</option>
                <option value="Query">Query</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
          {/* Contact Details */}
          <div className="text-gray-700">
            <Image
              src="/map.jpg"
              alt="Map"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
            <div className="mt-6 space-y-4">
              <p><strong>Landline:</strong> +92 305 1114485</p>
              <p><strong>Email:</strong> info@trendstore.pk</p>
              <p><strong>Address:</strong> Suite # 406, 4th Floor, CTC, Block 8 Gulberg, Lahore</p>
              <p><strong>Working Hours:</strong> Mon - Sat / 12:00PM - 7:00PM</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
          <div className="text-center">
            <Image src="/trend-logo.png" alt="logo" height={38} width={170} />
            <p className="text-gray-300 text-sm mt-4">
              Welcome to Trend EcomStore, your ultimate destination for cutting-edge gadgets!
            </p>
            <Image
              src="https://i.postimg.cc/Nj9dgJ98/cards.png"
              alt="Payment Cards"
              width={160}
              height={60}
              className="mt-2"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold">Shopping</h4>
            <ul className="text-gray-300 text-sm mt-4 space-y-2">
              <li>Computer Store</li>
              <li>Laptop Store</li>
              <li>Accessories</li>
              <li>Sales & Discounts</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Experience</h4>
            <ul className="text-gray-300 text-sm mt-4 space-y-2">
              <li>Contact Us</li>
              <li>Customer Service</li>
              <li>FAQs</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Newsletter</h4>
            <p className="text-gray-300 text-sm mt-4">
              Be the first to know about new arrivals, sales & promos!
            </p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 mt-4 bg-gray-800 text-white rounded-md"
            />
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm py-4">
          Design and Code by Luqman &copy; 2024
        </div>
      </footer>
    </>
  );
}

export default MainPage;
