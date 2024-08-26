import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export const Skills = () => {
  const programmingLanguagesKnown = [
    "Javascript",
    "Java",
    "Python",
    "C (Basics)",
  ];
  const frameworksKnown = ["React JS", "Node JS", "Express JS", "Tailwind CSS"];
  const toolsKnown = [
    "Version Control",
    "Redux Toolkit",
    "VS Code",
    "Netbeans",
  ];
  const softSkills = [
    "Communication Skills",
    "Leadership",
    "Presentation",
    "Team Work",
    "Adaptablity",
  ];
  return (
    <div className="border border-black h-180 p-10 flex justify-between">
      <div className="border border-black w-96 h-144 rounded-3xl p-10 flex">
        <div className="border border-black w-full h-full">
          <h1 className="text-center font-bold text-2xl my-5">
            Programming Languages
          </h1>
          <ul className="border border-black h-96 mx-5 flex flex-col justify-evenly pl-5">
            {programmingLanguagesKnown.map((skill) => {
              return (
                <div className="flex">
                  <RiVerifiedBadgeFill className="w-7 h-7 mx-5" />
                  <li className="font-bold text-lg">{skill}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border border-black w-96 h-144 rounded-3xl p-10 flex">
        <div className="border border-black w-full h-full">
          <h1 className="text-center font-bold text-2xl my-5">
            Frameworks & Library
          </h1>
          <ul className="border border-black h-96 my-5 mx-5 flex flex-col justify-evenly pl-5">
            {frameworksKnown.map((skill) => {
              return (
                <div className="flex">
                  <RiVerifiedBadgeFill className="w-7 h-7 mx-5" />
                  <li className="font-bold text-lg">{skill}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border border-black w-96 h-144 rounded-3xl p-10 flex">
        <div className="border border-black w-full h-full">
          <h1 className="text-center font-bold text-2xl my-5">Tools</h1>
          <ul className="border border-black h-96 my-5 mx-5 flex flex-col justify-evenly pl-5">
            {toolsKnown.map((skill) => {
              return (
                <div className="flex">
                  <RiVerifiedBadgeFill className="w-7 h-7 mx-5" />
                  <li className="font-bold text-lg">{skill}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border border-black w-96 h-144 rounded-3xl p-10 flex">
        <div className="border border-black w-full h-full">
          <h1 className="text-center font-bold text-2xl my-5">Soft Skills</h1>
          <ul className="border border-black h-96 my-5 mx-5 flex flex-col justify-evenly pl-5">
            {softSkills.map((skill) => {
              return (
                <div className="flex">
                  <RiVerifiedBadgeFill className="w-7 h-7 mx-5" />
                  <li className="font-bold text-lg">{skill}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
