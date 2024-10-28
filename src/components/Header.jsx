import React from "react";
import { Link } from "react-router-dom";

const Header = ({ darkModeSwitch }) => {
  const changeBgMode = () => {
    darkModeSwitch();
  };

  return (
    <div
      className={`flex px-[2rem] justify-between md:justify-between items-center  w-[100%] h-[6rem]  md:px-[4rem] lg:px-[8.5rem]`}
    >
      <Link to="/">
        <h1
          className={` text-[1.2rem] md:text-[1.5rem] font-extrabold cursor-pointer`}
        >
          Where in the World?
        </h1>
      </Link>

      <p
        onClick={changeBgMode}
        className="text-[0.8rem] md:text-[1rem] cursor-pointer"
      >
        <span className="mr-[0.5rem]">
          <i className="fa-regular fa-moon"></i>
        </span>
        Dark Mode
      </p>
    </div>
  );
};

export default Header;
