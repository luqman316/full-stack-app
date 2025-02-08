import Link from 'next/link'
import React from 'react'

function ExploreProduct({title,link}) {
  return (
    <>
    <Link href={link} className='text-white'  >
    <button className="bg-blue-900  text-white font-semibold mr-20  py-2 px-4 rounded-lg  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 ... ">
      Explore Our Products
    </button>
        
    </Link>
    
    </>
  )
}

export default ExploreProduct

//hover:bg-blue-700 transition duration-200 cursor-pointer