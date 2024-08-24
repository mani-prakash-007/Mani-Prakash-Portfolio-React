import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <div className="mx-10 my-5">
        {" "}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
