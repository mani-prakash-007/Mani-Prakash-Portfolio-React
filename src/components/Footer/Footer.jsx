import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className=" h-20 flex justify-evenly p-5 items-center mt-3">
      <div className=" w-120 text-center">
        Copyright © 2024 Mani Prakash. All Rights Reserved.
      </div>
      <div className=" w-156 text-center flex justify-evenly items-center">
        <h1 className="font-bold text-xl">Social Links : </h1>
        <SiGmail
          className="w-10 h-10 mx-5 cursor-pointer active:scale-90 hover:text-red-700"
          onClick={() => {
            window.open("mailto:manip8072@gmail.com");
          }}
        />
        <BsLinkedin
          className="w-10 h-10 mx-5 cursor-pointer active:scale-90 hover:text-blue-700"
          onClick={() => {
            window.open("https://www.linkedin.com/in/mani-prakash-885277229/");
          }}
        />
        <FaGithub
          className="w-10 h-10 mx-5 cursor-pointer active:scale-90 hover:text-gray-700"
          onClick={() => {
            window.open("https://www.github.com/mani-prakash-007");
          }}
        />
        <BsFacebook
          className="w-10 h-10 mx-5 cursor-pointer active:scale-90 hover:text-blue-700"
          onClick={() => {
            window.open(
              "https://www.facebook.com/profile.php?id=100035366822156"
            );
          }}
        />
        
        <FaInstagram
          className="w-10 h-10 mx-5 cursor-pointer active:scale-90 hover:text-pink-700"
          onClick={() => {
            window.open("https://www.instagram.com/mani_prakash_007/");
          }}
        />
      </div>
    </footer>
  );
};
