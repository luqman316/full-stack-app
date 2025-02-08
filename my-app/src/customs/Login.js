import Link from 'next/link'
import React from 'react'

function Login({title, link}) {
  return (
    <>
    <Link href={link} className='text-black'  >
        <div className='flex justify-end items-center gap-4 text-blue-500 px-2'>
            <button className='bg-blue-300  border border-white rounded-full px-6 py-1 text-white hover:bg-white hover:text-gray-700 transition'>{title} </button>             
        </div>
    </Link>
    </>
  )
}

export default Login
