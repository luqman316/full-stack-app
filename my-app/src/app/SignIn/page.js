import AddToCart from "@/customs/AddToCart";
import Login from "@/customs/Login";
import NavBar from "@/customs/NavBar";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

export default function SignIn() {
    return (
    <>
      <header className='  w-full '>
      <section className='text-white bg-gray-950  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center items-center  gap-1 p-6  '>
        <div>
          <p className='text-[14px] px-5'>Free shopping, 30 days return or refund guarantee.</p>
        </div>
        <div className='flex justify-end items-center  text-blue-500 px-5'>
          <Login title='SIGN IN' link='/SignIn' />
          <Login title='SIGN UP' link='/SignUp' />
        </div>
      </section>

      <div className='px-10 bg-[1E1F23] shadow-lg grid grid-cols-2'>
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
            <li>            
              <AddToCart icon={<FaShoppingCart className='text-black text-2xl' />} link='/Cart' />
            </li>
          </ul>
        </nav>
      </div>
    </header>


    <div className="flex justify-center items-center h-screen bg-gray-100 text-black">
    <div className="flex w-full max-w-2xl h-[70vh] rounded-lg shadow-lg overflow-hidden">
    {/* Left Side - Sign In Form */}
    <div className="flex flex-col justify-center items-center w-[60%] bg-white p-8">
      <h2 className="text-3xl font-semibold mb-6">Welcome</h2>
      <form className="flex flex-col w-full items-center">
        <label className="w-full text-gray-700 text-left mb-2">EMAIL</label>
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 p-2 mb-6"
        />
        <label className="w-full text-gray-700 text-left mb-2">PASSWORD</label>
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 p-2 mb-6"
        />
        <a href="#" className="text-sm text-gray-500 mb-6">Forgot password?</a>
        <button 
          type="submit" 
          className="w-full bg-[#d3a275] hover:bg-[#b68d58] text-white py-2 rounded-lg font-semibold"
        >
          SIGN IN
        </button>
      </form>
    </div>
    
    {/* Right Side - Sign Up Prompt */}
    <div className="w-[40%] bg-gray-700 flex flex-col justify-center items-center text-white p-8 ">
      <p className="text-sm mb-4">Dont have an account? Please</p>
    
        <Login title='SignUp' link='SignUp'/>
     
    </div>
  </div>
</div>

    </>

      
    );
  }
  