import React from "react";

const SearchBar = ({ onCountryInput }) => {
  const handleCountryInput = (e) => {
    onCountryInput(e.target.value);
  };

  return (
    <div className="bg-white rounded overflow-hidden w-[100%] h-[4rem] mb-[1rem] min-w-[15rem] md:w-[40%] flex md:justify-start shadow-md pl-[1rem]">
      <i className="fa-solid fa-magnifying-glass  text-gray-400 mr-[2rem] mt-[1.2rem]"></i>

      <input
        className="w-[100%] h-auto outline-none"
        type="text"
        onChange={handleCountryInput}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
