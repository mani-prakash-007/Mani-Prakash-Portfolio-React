import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" flex justify-between py-5 px-20 flex-wrap mb-3">
      <div className=" h-20 w-132 flex justify-center items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive && "text-orange-600"} hover:text-gray-400`
          }
        >
          <h1 className="font-extrabold text-5xl tracking-widest">
            MANI PRAKASH
          </h1>
        </NavLink>
      </div>
      <div className=" flex justify-center items-center w-168 flex-wrap">
        <NavLink
          to={""}
          className={({ isActive }) =>
            `mx-7 font-bold text-xl hover:text-gray-400 ${
              isActive && "text-orange-500"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `mx-7 font-bold text-xl hover:text-gray-400 ${
              isActive && "text-orange-500"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/skill"}
          className={({ isActive }) =>
            `mx-7 font-bold text-xl hover:text-gray-400 ${
              isActive && "text-orange-500"
            }`
          }
        >
          Skills
        </NavLink>
        <NavLink
          to={"/project"}
          className={({ isActive }) =>
            `mx-7 font-bold text-xl hover:text-gray-400 ${
              isActive && "text-orange-500"
            }`
          }
        >
          Projects
        </NavLink>
        {/* <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `mx-7 font-bold text-xl hover:text-gray-400 ${
              isActive && "text-orange-500"
            }`
          }
        >
          Contact
        </NavLink> */}
      </div>
    </header>
  );
};
