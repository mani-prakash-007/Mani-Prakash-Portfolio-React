import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border border-black h-20 flex justify-between p-5">
      <div className="border border-black">Left</div>
      <div className="border border-black">Right</div>
    </header>
  );
};
