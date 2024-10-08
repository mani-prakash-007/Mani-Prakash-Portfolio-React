import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <div className="mx-32 my-5 font-serif">
        {" "}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
