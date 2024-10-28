import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = ({ darkModeSwitch, darkMode }) => {
  let background = "bg-white";
  let text = "";
  if (darkMode) {
    background = "bg-darkBlue";
    text = "text-white";
  }
  return (
    <div className={`${background} ${text} h-full`}>
      <Header darkModeSwitch={darkModeSwitch} />
      <Outlet />
    </div>
  );
};

export default MainLayout;
