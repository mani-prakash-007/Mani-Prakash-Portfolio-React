import React from "react";
import Photo2 from "../../assets/Photo3.jpg";
import Education from "../../assets/Education.png";
import Experience from "../../assets/Experience.png";

export const About = () => {
  return (
    <div className="border border-black h-180 p-10 flex justify-between">
      <div className="border border-black w-96 h-144 items-center flex">
        <img src={Photo2} alt="Photo - 2" className="rounded-xl border border-black" />
      </div>
      <div className="border border-black w-3/4 h-144 p-10 flex flex-col justify-between">
        <div className="border border-black w-auto h-60 px-20 flex justify-between items-center">
          <div className="border border-black h-36 w-108 rounded-3xl flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <img src={Experience} className="w-10 h-10" alt="Svg" />
              <h1 className="font-bold text-xl">Experience</h1>
              <p className=" tracking-wider">Fresher</p>
            </div>
          </div>
          <div className="border border-black h-36 w-108 rounded-3xl flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <img src={Education} className="w-10 h-10" alt="" />{" "}
              <h1 className="font-bold text-xl">Education</h1>
              <p className=" tracking-wider">B.E Computer Science and Engineering</p>
            </div>
          </div>
        </div>
        <div className="border border-black w-auto h-60 py-5 px-10">
          <p className="text-lg">I'm Mani Prakash, a third-year Computer Science student specializing
          in Web Development, Artificial Intelligence and Machine Learning. I'm
          passionate about technology and driven to push boundaries. I
          continuously hone my skills to tackle real-world challenges and
          leverage technology to drive meaningful change and innovation.</p>
        </div>
      </div>
    </div>
  );
};
