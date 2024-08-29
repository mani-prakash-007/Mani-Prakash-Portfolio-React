import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

export const Contact = () => {
  //
  const contactData = useLoaderData();
  const gitHubData = contactData.gitHub.data;
  console.log(gitHubData);

  return (
    <div className="border border-black h-180 p-10  overflow-y-auto">
      <div className="w-auto border border-black m-5 py-10 px-5 h-108 rounded-3xl flex justify-between">
        <div className="border border-black w-132 h-full mx-10 rounded-full">
          <img
            src={gitHubData.avatar_url}
            className="h-full rounded-full"
            alt=""
          />
        </div>
        <div className="border border-black w-full h-full mx-10 flex justify-between py-5">
          <div className="w-full h-full border border-black mx-5">
            <h1 className="text-center my-5 font-bold text-2xl">Information</h1>
            <h2>
              <strong>User Name : </strong>
              <a href={`https://www.github.com/${gitHubData.login}`} target="_blank" className="text-blue-500 underline">
                {gitHubData.login}
              </a>
            </h2>
            <h2>
              <strong>Repositoies : </strong>
              {gitHubData.public_repos}
            </h2>
            <h2>
              <strong>Followers : </strong>
              {gitHubData.followers}
            </h2>
          </div>
          <div className="w-full h-full border border-black mx-5"></div>
        </div>
      </div>
    </div>
  );
};

export const fetchConactData = async () => {
  //Urls
  const gitHub = "https://api.github.com/users/mani-prakash-007";
  const linkedIn = "";
  const instagram = "";

  //Contact Data
  const contactData = {
    gitHub: "",
    linkedIn: "",
    instagram: "",
  };

  const githubData = await axios.get(gitHub);
  contactData.gitHub = githubData;

  return contactData;
};
