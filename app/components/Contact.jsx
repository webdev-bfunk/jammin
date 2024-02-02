import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className=" md:max-w-5xl w-full  flex flex-col-reverse md:flex-row gap-5">
    <div className="flex flex-col space-y-4 justify-end flex-1 ">
      <Image
        src="/vector2.png"
        alt="hero image"
        width={600}
        height={600}
        className=""
      />
    </div>
    <div className="flex flex-col justify-center flex-1 m-5 items-center">
    <div id="contact" className="flex md:hidden mt-20 w-full h-[5px] bg-gradient-to-r from-[#181818] via-fuchsia-500 to-[#181818]" />

    <h1 className="mb-6 text-center  text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 font-extrabold tracking-tighter">
       Reach out
      </h1>
        <form className='flex-col flex w-full gap-4'>
            <input className='px-4 py-2 rounded-md' placeholder='Name'/>
            <input className='px-4 py-2 rounded-md' placeholder='Email'/>
            <textarea rows={5} className='resize-none p-4 rounded-md' placeholder='Message...'/>
            <button className="px-5 py-2 bg-sky-500 text-white rounded-md my-2 hover:scale-95 hover:text-purple-300 transition-all duration-300 ease-in">
Send</button>
        </form>
    </div>
  </div>
  )
}

export default Contact