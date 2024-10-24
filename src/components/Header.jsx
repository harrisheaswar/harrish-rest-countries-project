import React from "react";
const Header = () => {
  return (
    <div className="flex justify-between items-center  w-[100%] h-[4rem]  shadow-md px-[6rem]">
      <h1 className="text-[1.5rem] font-extrabold">Where in the World?</h1>

      <p className="text-[1rem] cursor-pointer">
        <span className="mr-[0.5rem]">
          <i className="fa-regular fa-moon"></i>
        </span>
        Dark Mode
      </p>
    </div>
  );
};

export default Header;
