import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" max-w-5xl w-full p-5 flex flex-col md:flex-row gap-5">
      <div className="flex flex-col space-y-4 justify-end flex-1 ">
        <Image
          src="/vector4.png"
          alt="hero image"
          width={600}
          height={600}
          className=""
        />
      </div>
      <div className="flex flex-col justify-center flex-1 m-5 items-center">
        <h1 className="text-5xl font-extrabold leading-[75px] text-white">
          Witty slogan, you{" "}
          <span
            className="
text-transparent bg-clip-text bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 text-8xl"
          >
            love
          </span>{" "}
          to read.
        </h1>
        <button className="hover:text-pink-200 transition-all duration-200 ease-in hover:scale-95 px-3 py-2 rounded-md bg-gradient-to-r from-violet-400 to-indigo-700 m-5 text-white">
          Call to action
        </button>
      </div>
    </div>
  );
};

export default Hero;
