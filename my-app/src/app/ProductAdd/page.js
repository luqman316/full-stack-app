import AddProductForm from '@/customs/AddProductForm'
import AddToCart from '@/customs/AddToCart'
import Login from '@/customs/Login'
import NavBar from '@/customs/NavBar'
import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function ProductAdd() {
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

    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Product</h1>
      <AddProductForm />
    </div>


    </>
  )
}

export default ProductAdd;