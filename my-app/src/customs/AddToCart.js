import Link from 'next/link'
import React from 'react'

function AddToCart({link,icon}) {
  return (
   <>
   <Link href={link} passHref>
        <h3>{icon}</h3>
   </Link>
   </>
  )
}

export default AddToCart
