import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' text-center py-4 bg-gray-600' >
      <Link href='/'><span className='mx-3 text-white cursor-pointer'>Home</span></Link>

      <Link href='/posts'><span className='mx-3 text-white cursor-pointer'>Posts</span></Link>

      <Link href='/postWithId'><span className='mx-3 text-white cursor-pointer'>With Id</span></Link>

      <Link href='/components'><span className='mx-3 text-white cursor-pointer'>Components</span></Link>


    </div>
  )
}

export default Navbar