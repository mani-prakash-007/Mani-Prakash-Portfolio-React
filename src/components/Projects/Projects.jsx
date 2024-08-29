import React from "react";
import RandomQuoteGenerator from "../../assets/Random-Quote-Generator.png";
import ImageGallery from "../../assets/Image-Gallery.png";
import GithubSearcher from "../../assets/Github-searcher.png";
import Recipe from "../../assets/Recipe.png";
import WebDictionary from "../../assets/Web-Dictionary.png";
import Weather from "../../assets/Weather.png";
import TicTacToe from "../../assets/Tic-Tac-Toe.png";
import Rock from "../../assets/Rock-paper.png";
import ToDo from "../../assets/ToDo-App.png";
import Calculator from "../../assets/React-calculator.png";

export const Projects = () => {
  const projectDetails = [
    {
      ProjectName: "Random Quote Generator",
      ImageSoure: RandomQuoteGenerator,
      GithubRepository:
        "https://github.com/mani-prakash-007/HVA---Web-Dev-Projects/tree/main/Random%20Quote%20Generator",
      Deployment: "https://mani-prakash-007.github.io/Random-quote-generator/",
    },
    {
      ProjectName: "Image Gallery",
      ImageSoure: ImageGallery,
      GithubRepository: "",
      Deployment: "",
    },
    {
      ProjectName: "Github User Searcher",
      ImageSoure: GithubSearcher,
      GithubRepository: "",
      Deployment: "",
    },
    {
      ProjectName: "Recipe Finder",
      ImageSoure: Recipe,
      GithubRepository: "",
      Deployment: "",
    },
    {
      ProjectName: "Web Dictionary",
      ImageSoure: WebDictionary,
      GithubRepository: "",
      Deployment: "",
    },
    {
      ProjectName: "Weather App",
      ImageSoure: Weather,
      GithubRepository: "",
      Deployment: "",
    },
    {
      ProjectName: "Tic Tac Toe",
      ImageSoure: TicTacToe,
      GithubRepository: "",
      Deployment: "",
    },
    {
      ProjectName: "Rock Paper Sicssor",
      ImageSoure: Rock,
      GithubRepository: "",
      Deployment: "",
    },
    {
      ProjectName: "To-Do App",
      ImageSoure: ToDo,
      GithubRepository: "",
      Deployment: "",
    },
    {
      ProjectName: "React Calculator",
      ImageSoure: Calculator,
      GithubRepository: "",
      Deployment: "",
    },
  ];

  //Function for Github Repository
  const handleButton1Click = (link) => {
    if (link.length) {
      window.open(link, "_blank");
    }
  };

  //Function for Live Demo
  const handleButton2Click = (link) => {
    if (link.length) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className=" h-180 overflow-y-auto p-10 flex justify-evenly scroll-smooth flex-wrap">
      {projectDetails.map((data, index) => {
        return (
          <li key={index} className="list-none">
            <div className="border border-black w-108 h-156 rounded-3xl p-8 my-5 flex">
              <div className=" w-full">
                <img
                  src={data.ImageSoure}
                  alt="Random Quote Generator"
                  className="rounded-3xl w-full h-80 border border-black"
                />
                <div className=" h-36 flex justify-center items-center">
                  <h1 className="font-bold text-4xl text-center">
                    {data.ProjectName}
                  </h1>
                </div>
                <div className="flex justify-evenly my-5 ">
                  <button
                    onClick={() => handleButton1Click(data.GithubRepository)}
                    className="border border-black w-36  hover:bg-black font-semibold py-3 hover:text-white active:scale-95 rounded-3xl"
                  >
                    Github
                  </button>
                  <button
                    onClick={() => handleButton2Click(data.Deployment)}
                    className="border border-black w-36  hover:bg-black font-semibold py-3 hover:text-white active:scale-95 rounded-3xl"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};
