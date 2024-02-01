import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ postData }) {
  return (
    <div
    
      className="bg-zinc-200 border-sky-600 border-4 relative p-5 rounded-lg justify-center w-full  hover:scale-105"
    >
      <div className="h-[130px]  overflow-hidden flex items-center justify-center rounded-md shadow-md">
        <Image
          src={postData.image}
          alt="pic"
          height={200}
          width={600}
          className="rounded-md pb-3 "
        />
      </div>
      <h1 className="text-2xl my-3 text-blue-800 uppercase font-extrabold ">
        {postData.title}
      </h1>
      <span className="text-white flex gap-1 px-3 text-sm py-1 rounded-xl absolute top-8 right-8 opacity-80">
      {postData.categories.map((category) => (
            <p
              key={category._id}
              className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full"
            >
              {category.title}
            </p>
          ))}
      </span>
      <p className="line-clamp-5 mt-3">{postData.body}</p>
      <div className="w-full flex items-center justify-center my-3">
        <button className="px-5 py-2 bg-blue-600 text-white rounded-md my-4=">
        <Link href={`/${postData._id}`}>Read more</Link>
        </button>
      </div>
      <span className="flex gap-1 text-gray-700 justify-end w-full px-5 py-2">
        posted by<h3 className="font-bold text-blue-800"> {postData.author.name}</h3> on <h3 className="font-bold text-blue-800">{Date(postData.publishedAt).substring(0, 15)}</h3>
      </span>
    </div>
  );
}
