'use client'
import React from 'react'

import { motion } from 'framer-motion'

function Motion() {
  return (
    
       <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className='text-black'>Hello, Framer Motion in Next.js!</h1>
    </motion.div>
   
  )
}

export default Motion
