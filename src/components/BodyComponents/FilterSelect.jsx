import React from "react";

const FilterSelect = ({ onRegionChange, darkMode }) => {
  const handleRegion = (e) => {
    onRegionChange(e.target.value);
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
      className={`${background2} flex md:mr-[1rem] rounded-lg w-[50%] justify-center items-center md:px-5  md:w-auto h-[4rem] shadow-md  md:rounded outline-none overflow-hidden`}
    >
      <select
        className={`${background2}  md:pr-[3rem] w-[100%] outline-none py-[1.5rem]`}
        onChange={handleRegion}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterSelect;
