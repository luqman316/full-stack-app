import Link from 'next/link'
import React from 'react'

function NavBar({title,link}) {
  return (
    <>
    <Link href={link} className='text-black fas'  >
        <h3 className=' hover:underline  ' >{title}</h3>
        
    </Link>
    </>
  )
}

export default NavBar
