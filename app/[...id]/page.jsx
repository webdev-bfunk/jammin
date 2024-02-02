import { AiOutlineArrowLeft } from "react-icons/ai"; 
import Image from 'next/image'
import React from 'react'
import { getPosts } from '@/sanity/lib/client';
import Link from 'next/link';

export const revalidate = 60

export default async function SinglePostPage({ params }) {
  const postID = params.id[0];
  const posts = await getPosts();
  const singlePost = posts.find((post) => post._id === postID);

  // Check if singlePost is not defined
  if (!singlePost) {
    // Handle the case when there is no post with the specified postID
    return <div>No post found</div>;
  }
  return (
    <div className='h-full  grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl p-5'>
      <div className='w-full items-center justify-center mt-10'>
        <Image src={singlePost.image} alt="image" height={450} width={450} className='rounded-md'/>
      </div>
      <div className='mt-10'>
      <h1 className="text-5xl md:text-6xl pb-2 text-transparent bg-clip-text bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 font-extrabold tracking-tighter">
        {singlePost.title}
      </h1>
        <p className='text-gray-200 my-4 text-lg indent-10 p-2 text-justify break-normal'>{singlePost.body}
        
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
        </p>
      

   
      <span className="flex gap-1 text-gray-200 justify-end w-full px-5 text-lg">
            Posted by
            <h3 className="font-bold text-sky-400">{singlePost.author.name}</h3>{" "}
            on{" "}
            <h3 className="font-bold text-sky-400">
            {Date(singlePost.publishedAt).substring(0, 15)}
            </h3>
          </span>
          <Link href='/' className="flex flex-col gap-1 items-center justify-center text-zinc-400 mt-5 hover:scale-105 hover:text-purple-500 transition-all duration-200 ease-in"><AiOutlineArrowLeft />Back home</Link></div>
      </div>

  )
}
