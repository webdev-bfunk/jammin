import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Card({ postData }) {
  return (
    <div className="">
      <div className=" w-full relative rounded-md bg-gradient-to-r from-pink-500 via-teal-400 to-sky-500 p-1">
        <div className="text-white flex flex-col h-full w-full bg-zinc-800 p-4">
          <div className="h-[130px]  overflow-hidden flex items-center justify-center rounded-md shadow-md bg-zinc-800">
            <Image
              src={postData.image}
              alt="pic"
              height={200}
              width={600}
              className="rounded-md pb-3 "
            />
          </div>
          <h1 className="text-2xl my-3 text-sky-400 uppercase font-extrabold ">
            {postData.title}
          </h1>
          <span className="text-white flex gap-1 px-3 text-sm py-1 rounded-xl absolute top-8 right-8 opacity-80">
          {postData.categories && postData.categories.map((category) => (
              <p
                key={category._id}
                className="border bg-primary-dark text-sky-300 py-1 px-2 text-xs rounded-full"
              >
                {category.title}
              </p>
            ))}
          </span>
          <p className="line-clamp-5 my-3">{postData.body}</p>
          <div className="w-full flex items-center justify-center my-3">
            <button className="px-5 py-2 bg-sky-500 text-white rounded-md my-2 hover:scale-95 hover:text-purple-300 transition-all duration-200 ease-in">
              <Link href={`/${postData._id}`}>Read more</Link>
            </button>
          </div>
          <span className="flex gap-1 text-gray-200 justify-end w-full px-5 ">
            posted by
            <h3 className="font-bold text-sky-400"> {postData.author.name}</h3>{" "}
            on{" "}
            <h3 className="font-bold text-sky-400">
              {Date(postData.publishedAt).substring(0, 15)}
            </h3>
          </span>
        </div>
      </div>
    </div>
  );
}
