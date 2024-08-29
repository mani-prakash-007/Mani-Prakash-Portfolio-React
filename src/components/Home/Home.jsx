import React from "react";
import Photo1 from "../../assets/Photo1.jpg";

export const Home = () => {
  return (
    <div className=" h-180 p-10 flex justify-around">
      <div className=" w-192 p-10 flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <p className="m-5 font-semibold text-xl">Hello, I'm </p>
          <p className="m-5 font-bold text-5xl">Mani Prakash</p>
          <button
            className="m-5 border border-black px-10 py-4 rounded-3xl hover:text-white hover:bg-orange-500 font-bold text-xl active:scale-95"
            onClick={() => {
              window.open(
                "https://mani-prakash-007.github.io/Mani-Prakash-Portfolio/assets/Maniprakash-RESUME.pdf"
              );
            }}
          >
            Resume
          </button>
        </div>
      </div>
      <div className=" w-192 flex justify-center items-center">
        <img
          src={Photo1}
          alt="Mani Praksh Photo"
          className="rounded-full border border-black w-132"
        />
      </div>
    </div>
  );
};
