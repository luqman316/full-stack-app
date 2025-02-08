import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function AddProduct({title, link}) {
  return (
    <>
    <Link href={link} className='text-white '  >
        <div className=''>
        <Button variant="outline" className=" bg-blue-700 h-64" >{title}</Button>
        </div>
    </Link>
    </>
  )
}

export default AddProduct
