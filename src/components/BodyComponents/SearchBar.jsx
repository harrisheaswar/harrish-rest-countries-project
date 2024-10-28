import React from "react";

const SearchBar = ({ onCountryInput, darkMode }) => {
  const handleCountryInput = (e) => {
    onCountryInput(e.target.value);
  };

  let background = "bg-white";
  let text = "";
  let background2 = "bg-white";
  if (darkMode) {
    background = "bg-veryDarkBlue";
    background2 = "bg-darkBlue";
    text = "text-white";
  }

  return (
    <div
      className={`${background2} md:mr-[1rem] rounded overflow-hidden w-[100%] h-[4rem] mb-[1rem] min-w-[15rem] md:w-[40%] flex md:justify-start shadow-md pl-[1rem]`}
    >
      <i
        className={`${background2} fa-solid fa-magnifying-glass  text-gray-400 mr-[2rem] mt-[1.2rem]`}
      ></i>

      <input
        className={`${background2} ${text} w-[100%] h-auto outline-none`}
        type="text"
        onChange={handleCountryInput}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
