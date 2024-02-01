import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div id="top" className='flex w-full justify-between items-center p-5  max-w-5xl'>
      <div>
        <Link href="/">
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>Generico &nbsp;</h1>
        </Link>
      </div>
      <div className='text-white flex gap-5 text-lg transition-all duration-500 ease-in-out'>
        <Link href="#about" className='hover:scale-105 hover:text-purple-500 transition-all duration-200 ease-in'>About</Link>
        <Link href="#posts" className='hover:scale-105 hover:text-purple-500 transition-all duration-200 ease-in'>Blog</Link>
        <Link href="#contact" className='hover:scale-105 hover:text-purple-500 transition-all duration-200 ease-in'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar