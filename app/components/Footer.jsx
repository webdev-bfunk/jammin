import { AiOutlineArrowUp } from "react-icons/ai"; 
import { SlSocialSoundcloud } from "react-icons/sl";
import { SlSocialSpotify } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-5xl w-full justify-center  text-white p-4 text-center ">
      <div className="flex  justify-center items-center"> 
        <Link href="#top" className="flex flex-col text-zinc-400 justify-center items-center hover:scale-105 hover:text-purple-500 transition-all duration-200 ease-in"><AiOutlineArrowUp size={20}/>Back to top</Link>
      </div>
      <span className="flex justify-center my-4 gap-10 text-sky-500">
        <SlSocialFacebook size={30} className="hover:scale-95 hover:text-purple-500 transition-all duration-200 ease-in"/>
        <SlSocialInstagram size={30} className="hover:scale-95 hover:text-purple-500 transition-all duration-200 ease-in"/>
        <SlSocialYoutube size={30} className="hover:scale-95 hover:text-purple-500 transition-all duration-200 ease-in"/>
        <SlSocialSpotify size={30} className="hover:scale-95 hover:text-purple-500 transition-all duration-200 ease-in"/>
        <SlSocialSoundcloud size={30} className="hover:scale-95 hover:text-purple-500 transition-all duration-200 ease-in"/>
      </span>
      &copy; Copyright Generico 2024. All Rights Reserved
    </div>
  );
};

export default Footer;
