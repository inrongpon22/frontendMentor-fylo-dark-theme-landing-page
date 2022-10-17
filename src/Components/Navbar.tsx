import React from 'react'
import Logo from '../assets/images/logo.svg'

function Navbar() {
  return (
    <main className='flex justify-between items-center px-5 lg:px-10 py-5 lg:py-10'>
      <img src={Logo} alt="" className='w-24 lg:w-auto' />
      <div className="flex justify-around w-52">
        <a href="#" className='hover:font-bold hover:underline'>Features</a>
        <a href="#" className='hover:font-bold hover:underline'>Team</a>
        <a href="#" className='hover:font-bold hover:underline'>Sign In</a>
      </div>
    </main>
  )
}

export default Navbar