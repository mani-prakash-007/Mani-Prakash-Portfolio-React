import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";
import * as RiIcons from "react-icons/ri";
import Python from "../../assets/python-icon.png";
import NetBeans from "../../assets/netbeans-icon.png";
import Communication from "../../assets/Communication.png";
import Adaptibility from "../../assets/Adaptiblity.png";
import Leadership from "../../assets/Leadership.png";
import Presentation from "../../assets/Presentation.png";
import TeamWork from "../../assets/Teamwork.png";

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

  const renderProgrammingLanguages = (language) => {
    switch (language) {
      case "Javascript":
        return <FaIcons.FaJsSquare className="w-7 h-7 mx-5 text-yellow-400" />;
      case "Java":
        return <FaIcons.FaJava className="w-7 h-7 mx-5 text-red-500" />;
      case "Python":
        return <img src={Python} alt="" className="w-7 h-7 mx-5" />;
      case "C (Basics)":
        return <FaIcons.FaCuttlefish className="w-7 h-7 mx-5 text-blue-700" />;
    }
  };

  const renderFrameworks = (framework) => {
    switch (framework) {
      case "React JS":
        return <FaIcons.FaReact className="w-7 h-7 mx-5 text-sky-500" />;
      case "Node JS":
        return <FaIcons.FaNodeJs className="w-7 h-7 mx-5 text-green-600" />;
      case "Express JS":
        return <SiIcons.SiExpress className="w-7 h-7 mx-5 text-red-500" />;
      case "Tailwind CSS":
        return <SiIcons.SiTailwindcss className="w-7 h-7 mx-5 text-sky-500" />;
    }
  };

  const renderTools = (tool) => {
    switch (tool) {
      case "Version Control":
        return <FaIcons.FaGitAlt className="w-7 h-7 mx-5 text-orange-600" />;
      case "Redux Toolkit":
        return <SiIcons.SiRedux className="w-7 h-7 mx-5 text-violet-600" />;
      case "VS Code":
        return <VscIcons.VscVscode className="w-7 h-7 mx-5 text-blue-600" />;
      case "Netbeans":
        return <img src={NetBeans} alt="Netbeans" className="w-7 h-7 mx-5" />;
    }
  };

  const renderSoftSkill = (skill) => {
    switch (skill) {
      case "Communication Skills":
        return <img src={Communication} alt="" className="w-7 h-7 mx-5" />;
      case "Presentation":
        return <img src={Presentation} alt="" className="w-7 h-7 mx-5" />;
      case "Team Work":
        return <img src={TeamWork} alt="" className="w-7 h-7 mx-5" />;
      case "Adaptablity":
        return <img src={Adaptibility} alt="" className="w-7 h-7 mx-5" />;
      case "Leadership":
        return <img src={Leadership} alt="" className="w-7 h-7 mx-5" />;
    }
  };
  return (
    <div className=" h-180 p-10 flex justify-between">
      <div className="border border-black w-96 h-144 rounded-3xl p-10 flex">
        <div className=" w-full h-full">
          <h1 className="text-center font-bold text-3xl text-gray-500 my-5 ">
            Programming Languages
          </h1>
          <ul className=" h-96 mx-5 flex flex-col justify-evenly pl-5">
            {programmingLanguagesKnown.map((skill) => {
              return (
                <div className="flex">
                  {renderProgrammingLanguages(skill)}
                  <li className="font-bold text-lg">{skill}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border border-black w-96 h-144 rounded-3xl p-10 flex">
        <div className=" w-full h-full">
          <h1 className="text-center font-bold text-3xl text-gray-500 my-5 ">
            Frameworks & Library
          </h1>
          <ul className=" h-96 my-5 mx-5 flex flex-col justify-evenly pl-5">
            {frameworksKnown.map((skill) => {
              return (
                <div className="flex">
                  {renderFrameworks(skill)}
                  <li className="font-bold text-lg">{skill}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border border-black w-96 h-144 rounded-3xl p-10 flex">
        <div className=" w-full h-full">
          <h1 className="text-center font-bold text-3xl text-gray-500 my-5 ">
            Tools
          </h1>
          <ul className=" h-96 my-5 mx-5 flex flex-col justify-evenly pl-5">
            {toolsKnown.map((skill) => {
              return (
                <div className="flex">
                  {renderTools(skill)}
                  <li className="font-bold text-lg">{skill}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border border-black w-96 h-144 rounded-3xl p-10 flex">
        <div className=" w-full h-full">
          <h1 className="text-center font-bold text-3xl text-gray-500 my-5 ">
            Soft Skills
          </h1>
          <ul className=" h-96 my-5 mx-5 flex flex-col justify-evenly pl-5">
            {softSkills.map((skill) => {
              return (
                <div className="flex">
                  {renderSoftSkill(skill)}
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
