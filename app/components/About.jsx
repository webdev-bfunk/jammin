import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
          <div id="about" className="mt-20 w-full h-[5px] bg-gradient-to-r from-[#181818] via-fuchsia-500 to-[#181818]" />

       <h1 className=" text-center  text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500 font-extrabold tracking-tighter">
        About us
      </h1>
    <div className=" max-w-5xl w-full p-5 flex flex-col md:flex-row gap-5">
      <div className="flex flex-col justify-center flex-1 m-5 items-center">
        <h1 className="text-xl leading-[60px] text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellendus magni sapiente et ipsam libero quod sint numquam mollitia esse, doloremque, reiciendis molestias odit, tenetur qui eligendi? Quasi, nobis minima.
        </h1>
      </div>
      <div className="flex flex-col space-y-4 justify-end flex-1 ">
        <Image
          src="/vector3.png"
          alt="About image"
          width={600}
          height={600}
          className=""
        />
      </div>
    </div>
    </>
  );
};

export default About;
