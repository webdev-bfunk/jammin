import { BsArrowLeft } from "react-icons/bs"; 
import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <div className="flex min-h-screen flex-col mb-8 justify-center items-center">
      <h1 className="text 6xl"> Uh oh! Page not found! <br />
      Please return home and try again.</h1>
      <Link href="/"><BsArrowLeft />Back Home</Link>
    </div>
  )
}
