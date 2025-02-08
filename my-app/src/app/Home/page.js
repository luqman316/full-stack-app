import AddToCart from '@/customs/AddToCart';
import ExploreProduct from '@/customs/ExploreProduct';
import Login from '@/customs/Login';
import NavBar from '@/customs/NavBar';
import ProductCard from '@/customs/product';
import Image from 'next/image';
import { BiSupport } from "react-icons/bi";
import { FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
// import CartValue from '@/components/UpdateCartValu';
// import products from '@/api/products.json';
// pages/_app.js
// import '../styles/global.css';


// w-[90%] ml-[65px] // same for header and main

function MainPage({ Component, pageProps }) {
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

    {/* main section */}
    <main className='max-w-full '>
      <section className='bg-custom-gradient1 h-[500px] ' >
        <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-2 '>
          <div className=" p-8 text-center text-white flex flex-col justify-center items-center mt-20" >
            <p className="text-blue-950  uppercase text-xl  mb-2 font-bold font-mono">
              Explore the Latest in Tech Industries
            </p>
            <h1 className="text-blue-950 font-bold capitalize text-3xl mb-4 font-serif">
              Your Destination For Cutting-Edge Gadgets       
            </h1>
            <p className="text-white text-lg mb-4 font-mono">
              Welcome to Trend eComStore, your ultimate destination for cutting-edge gadgets! Explore the latest in tech innovation and style with us. Shop now and discover a world of possibilities!
            </p>
            <div>
              <ExploreProduct title='Explore Products' link='/Product' />
            </div>
          </div>

            <div className='flex flex-col justify-center items-center mt-12 ' > 
              <figure className="animate-pulse">
                <Image src='/heroImage.png' alt='hero' height={200} width={450} />
              </figure>
            </div>
        </div>

        <div className=' '>
          {/* <WaveShape  /> */}
        </div>
        
      </section>
    </main><br/><br/>

    {/* 3 grid section sale */}
    <section className=' mt-10  flex justify-center items-center mb-10 ' >
      <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 w-[80%]   h-auto '>

        <div className='bg-slate-300 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 shadow-xl justify-center items-center '>
          <div className='text-black px-4 ' >
            <p className='uppercase font-mono text-md text-blue-600' >new year sale</p>
            <h3 className='capitalize text-xl font-extrabold '>get and extra 30% off</h3>
            <button className=' underline '>Shop Now</button>
          </div>
          <div className='flex justify-center items-center'>
            <Image src='/laptop.png' alt='laptop' height={100} width={150}  />
          </div>
        </div>

        <div className='bg-slate-300 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 shadow-xl justify-center items-center '>
          <div className='text-black px-4 ' >
            <p className='uppercase font-mono text-md text-blue-600' >new year sale</p>
            <h3 className='capitalize text-xl font-extrabold '>get and extra 30% off</h3>
            <button className=' underline '>Shop Now</button>
          </div>
          <div className='flex justify-center items-center'>
            <Image src='/headphoneEcom.png' alt='laptop' height={100} width={150}  />
          </div>
        </div>

         <div className='bg-slate-300 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 shadow-xl justify-center items-center '>
          <div className='text-black px-4 ' >
            <p className='uppercase font-mono text-md text-blue-600' >new year sale</p>
            <h3 className='capitalize text-xl font-extrabold '>get and extra 30% off</h3>
            <button className=' underline '>Shop Now</button>
          </div>
          <div className='flex justify-center items-center'>
            <Image src='/mobiles.png' alt='laptop' height={100} width={150}  />
          </div>
        </div>

      </div>
    </section>


    {/* 4 grid section world shiping */}
    <section className='mt-10 mb-10 flex justify-center items-center '>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] h-auto bg-[f7f7f7] shadow-md  ' >

        <div className='bg-[f7f7f7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center border-r-2 border-l-2 border-t-2 border-b-2  '>
          <div>
            <FaShippingFast className='text-blue-600 text-3xl ml-12 animate-pulse ' />
          </div>
          <div className='capitalize text-black '>
            <p className=' text-xl  '>worldwide shipping</p>
            <p className='text-xs'>order above $100</p>
          </div>
        </div>

        <div className='bg-[f7f7f7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center border-r-2 border-l-2 border-t-2 border-b-2 '>
          <div className=''>
            <FiRefreshCw className='text-blue-600 text-3xl ml-12 animate-pulse'/>
            {/* <video src="/video.mp4" loop  autoPlay muted className='bg-transparent'></video> */}

          </div>
          <div className='text-black capitalize mr-2 '>
            <p className='text-xl'>Easy 30 Day Returns</p>
            <p className='text-xs'>Back Returns in 7 Days</p>
          </div>
        </div>

        <div className='bg-[f7f7f7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center border-r-2  border-l-2 border-t-2 border-b-2'>
          <div>
            <GiReceiveMoney className='text-blue-600 text-3xl ml-12 animate-pulse ' />
          </div>
          <div className='text-black capitalize mr-2'>
            <p className='text-xl'>money back guarantee</p>
            <p className='text-xs'>guarantee with in 30-Days</p>
          </div>
        </div>

        <div className='bg-[f7f7f7] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center border-r-2 border-l-2 border-t-2 border-b-2  '>
          <div>
            <BiSupport  className='text-blue-600 text-3xl ml-12 animate-pulse '/>
          </div>
          <div className='text-black capitalize me-2'>
            <p className='text-xl'>Easy Online Support</p>
            <p className='text-xs'>24/7 Any time support</p>
          </div>
        </div>
      </div>
    </section><br/>

    {/* text */}
    <section className=' mt-10 mb-10 flex justify-center items-center'>
      <div className=' md:grid-cols-1 lg:grid-cols-1 grid grid-cols-1  w-[80%] font-bold ' >
        <h2 className='text-black text-4xl flex justify-start items-start pl-[1.5rem] ' >Checkout Trend store</h2>
        <section >
          <div ></div>
        </section>
      </div>
    </section><br/>

    {/* product */}
    <section className='flex flex-col justify-center items-center'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[80%] justify-center items-center  ">
      <ProductCard
        category="Mobile"
        imageSrc="/iphone.png"
        productName="SmartPhone"
        description="Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."
        rating={4}
        price="$20.00"
        actualPrice="$25.00"
        stock="50"
      
      />
      <ProductCard
        category="Computer"
        imageSrc="/lapi.png"
        productName="Laptop"
        description="Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display."
        rating={4}
        price="$20.00"
        actualPrice="$25.00"
        stock="50"      
      />
      <ProductCard
        category="Audio"
        imageSrc="/headphone.png"
        productName="Wireless Headphones"
        description="High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
        rating={4}
        price="$20.00"
        actualPrice="$25.00"
        stock="50"      
      />
      <ProductCard
        category="Waerables"
        imageSrc="/watch.png"
        productName="Watches"
        description="Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish color."
        rating={4}
        price="$20.00"
        actualPrice="$25.00"
        stock="50"
      />
      <ProductCard
        category="Audio"
        imageSrc="/speakers.png"
        productName="Speakers"
        description="High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
        rating={4}
        price="$20.00"
        actualPrice="$25.00"
        stock="50"      
      />
      <ProductCard
        category="Screens"
        imageSrc="/tv.png"
        productName="Television"
        description="Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish color."
        rating={4}
        price="$20.00"
        actualPrice="$25.00"
        stock="50" 
      />
    </div>
    <div className='text-xs animate-pulse' >
      <NavBar className="text-xs animate-pulse" title=' For more product, explore Product Section!' link='/Product'/>
      </div>
    </section><br/><br/><br/>

    {/* why chose section */}
    <section className='mt-10 flex flex-col justify-center items-center '>
      <div className=' md:grid-cols-1 lg:grid-cols-1 grid grid-cols-1  w-[80%]  '>
        <h2 className='text-black text-3xl flex justify-start items-start pl-[1.5rem] font-bold'>Why Choose Trend Store</h2>
        <p className='text-black  flex justify-start items-start pl-[1.5rem]'>
        Choose Trend EduHub for a holistic, enriching learning experience that
        empowers you to achieve your goals.
        </p>
      </div> <br/><br/><br/><br/> 

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] '>

        <div className="choose-left-div text-left space-y-8 text-black">
          <div className="why-choose--div" data-aos="zoom-in-up" data-aos-delay="0">
            <p className="common-text--highlight text-3xl font-bold text-blue-500">1</p>
            <h3 className="section-common--title text-xl font-semibold mt-2">Wide Selection</h3>
            <p className="text-gray-700 mt-1 text-balance">
              Trend Store offers a diverse range of gadgets, from smartphones to smart home devices,
              ensuring you find what you need to elevate your lifestyle and meet your tech requirements.
            </p>
        </div>
        
        <div className="why-choose--div" data-aos="zoom-in-up" data-aos-delay="300">
          <p className="common-text--highlight text-3xl font-bold text-blue-500">2</p>
          <h3 className="section-common--title text-xl font-semibold mt-2">Quality Assurance</h3>
          <p className="text-gray-700 mt-1 text-balance">
            Every gadget at Trend Store undergoes rigorous quality checks, guaranteeing reliability and performance,
            so you can shop with confidence knowing you are getting the best.
          </p>
        </div>
    
        <div className="why-choose--div" data-aos="zoom-in-up" data-aos-delay="600">
          <p className="common-text--highlight text-3xl font-bold text-blue-500">3</p>
          <h3 className="section-common--title text-xl font-semibold mt-2">Competitive Prices</h3>
          <p className="text-gray-700 mt-1 text-balance">
            Enjoy great value with Trend Stores competitive prices on high-quality gadgets, making top-of-the-line
            technology accessible to all without compromising on quality or performance.
          </p>
        </div>
      </div>

      <div className="choose-center-div" data-aos="zoom-in" data-aos-delay="300">
      <figure>
        <Image 
          src='/ecompost.png' 
          alt="Trend technical home page" 
          width={500} 
          height={500} 
          className="w-full h-auto animate-pulse"
          
        />
      </figure>
      </div>  
      <div className="choose-right-div text-black">
      <div
        className="why-choose--div text-left"
        data-aos="zoom-in-up"
        data-aos-delay="0"
      >
        <p className="common-text--highlight text-3xl font-bold text-blue-500">4</p>
        <h3 className="section-common--title text-xl font-semibold mt-2">Expert Guidance</h3>
        <p className='text-gray-700 mt-3 text-balance'>
          Our knowledgeable staff provides expert guidance, helping you choose the right gadget to meet your needs and preferences, ensuring you make informed decisions every step of the way.
        </p>
      </div>

      <div
        className="why-choose--div text-left"
        data-aos="zoom-in-up"
        data-aos-delay="300"
      >
        <p className="common-text--highlight  text-3xl font-bold text-blue-500 mt-6">5</p>
        <h3 className="section-common--title text-xl font-semibold mt-2">Convenient Shopping</h3>
        <p className='text-gray-700 mt-3 text-balance'>
          With Trend Store, shopping for gadgets is easy and convenient. Our user-friendly website and secure payment options ensure a seamless experience from browsing to checkout, all from the comfort of your home.
        </p>
      </div>

      <div
        className="why-choose--div text-left"
        data-aos="zoom-in-up"
        data-aos-delay="600"
      >
        <p className="common-text--highlight  text-3xl font-bold text-blue-500">6</p>
        <h3 className="section-common--title text-xl font-semibold mt-2">Excellent Service</h3>
        <p className='text-gray-700 mt-1 text-balance'>
          Trend Store is committed to providing excellent service to our customers. From prompt assistance with inquiries to efficient handling of orders and deliveries, we prioritize your satisfaction every step of the way.
        </p>
      </div>
    </div>
      </div>
    </section> <br/><br/><br/><br/>


    {/* footer */}
    <footer className='flex flex-col justify-center items-center mt-10  '>
      <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full bg-gray-950 h-72 gap-5 '>
        <div className=' flex flex-col justify-center items-center '>
          <Image src='/trend-logo.png' alt='logo' height={38} width={170} className='p-3' />
          <p className='mt-4 text-xs text-center mb-4 text-gray-300 '>
            Welcome to Trend EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <Image className='mt-2' src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" width={160} height={60}/>
        </div>

        <div className=' flex flex-col justify-center items-center '>
          <h4 className=' mt-4 text-xl  '>Shopping</h4>
          <p className='mt-4 text-xs text-gray-300 mb-2'>Computer Store</p>
          <p className='text-xs text-gray-300 mb-2'>Laptop Store</p>
          <p className='text-xs text-gray-300 mb-2'>Accessories</p>
          <p className='text-xs text-gray-300 mb-2'>Sales & Discount</p>
        </div>
        
        <div className=' flex flex-col justify-center items-center '>
          <h4 className=' mt-4 text-xl  '>Experience</h4>
          <p className='mt-4 text-xs text-gray-300 mb-2 cursor-pointer'>Contact Us</p>
          <p className='text-xs text-gray-300 mb-2'>Laptop Store</p>
          <p className='text-xs text-gray-300 mb-2'>Accessories</p>
          <p className='text-xs text-gray-300 mb-2'>Sales & Discount</p>
        </div>

        <div className=' flex flex-col justify-center items-center '>
          <h4 className=' mt-4 text-xl  '>NEWSLETTER</h4>
          <p className='mt-4 text-xs text-center mb-4 text-gray-300 '>Be the first to know about new<br />arrivals, sales & promos!</p>
          <div>
            <input type='email' placeholder='  Your Email' className=' bg-slate-700 rounded-md text-white border-b-4 p-2 ' /> 
          </div>
        </div>  
      </div> 

      <div className='w-full bg-gray-950 h-11 '>  
          <hr className='w-auto '/>  
          <div className='flex flex-col justify-center items-center mt-2 '>
          <p className='text-xs text-center mb-4 text-lime-50'>Design and Code by Luqman</p>
          </div>
      </div>
    </footer>
    </>
  )
}

export default MainPage
