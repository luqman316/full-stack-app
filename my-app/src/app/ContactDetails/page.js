"use client";
import AddToCart from "@/customs/AddToCart";
import Login from "@/customs/Login";
import NavBar from "@/customs/NavBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function ContactDetails() {
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  const fetchContacts = async () => {
    try {
      const response = await fetch("http://localhost:3001/contact");
      const data = await response.json();
      setContactList(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contact data:", error);
      setLoading(false);
    }
  };

  // Delete a contact
  const handleDelete = async (id) => {
    // if (confirm("Are you sure you want to delete this record?")) {
    //   try {
    //     const response = await fetch(`http://localhost:3001/contact?id=${id}`, {
    //       method: "DELETE",
    //     });
    //     const result = await response.json();
    //     alert(result.message);
    //     fetchContacts(); // Refresh the contact list
    //   } catch (error) {
    //     console.error("Error deleting contact:", error);
    //   }
    // }
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

  try {
    const response = await fetch(`http://localhost:3001/contact/${id}`, {
      method: "DELETE", 
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Form deleted successfully from backend");
      setCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Update front-end state
      alert("Form deleted successfully!");
    } else {
      const errorData = await response.json(); // Check for server error details
      console.error("Failed to delete from backend:", errorData);
      alert("Failed to delete the form from backend!");
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    alert("An error occurred while deleting the form.");
  }
  };

  // Fetch contacts on page load
  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) return <p>Loading...</p>;

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

    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Contact Details</h1>
      {contactList.length === 0 ? (
        <p className="text-center text-gray-500">No contact details available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">father Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Nature of Contact</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Actions</th>

            </tr>
          </thead>
          <tbody>
            {contactList.map((contact) => (
              <tr key={contact.id}>
                <td className="border p-2">{contact.name}</td>
                <td className="border p-2">{contact.fathername}</td>
                <td className="border p-2">{contact.email}</td>
                <td className="border p-2">{contact.phone}</td>
                <td className="border p-2">{contact.natureOfContact}</td>
                <td className="border p-2">{contact.message}</td>
                <td className="border p-2 text-center">
                  <button
                    className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
}

export default ContactDetails;
