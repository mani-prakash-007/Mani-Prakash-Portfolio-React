import React from "react";
import Photo1 from "../../assets/Photo1.jpg";

export const Home = () => {
  return (
    <div className="border border-black h-180 p-10 flex justify-around">
      <div className="border border-black w-192 p-10 flex justify-center items-center">
        <div className="border border-black flex flex-col justify-center items-center">
          <p className="m-5 font-semibold text-xl">Hello, I'm </p>
          <p className="m-5 font-bold text-5xl">Mani Prakash</p>
        </div>
      </div>
      <div className="border border-black w-192 flex justify-center items-center">
        <img
          src={Photo1}
          alt="Mani Praksh Photo"
          className="rounded-full border border-black w-132"
        />
      </div>
    </div>
  );
};
