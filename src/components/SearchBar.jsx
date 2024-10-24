import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-white flex justify-center shadow-md pl-[3rem]">
      <i className="fa-solid fa-magnifying-glass  text-gray-400 mr-[2rem] mt-[1.2rem]"></i>

      <input
        className="w-[30rem] h-auto"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
