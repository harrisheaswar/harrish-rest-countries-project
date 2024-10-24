import React from "react";

const FilterSelect = ({ onRegionChange }) => {
  const handleRegion = (e) => {
    onRegionChange(e.target.value);
  };
  return (
    <div className="flex rounded-lg w-[50%] justify-center items-center md:px-5 md:py-4 bg-white md:w-auto h-[4rem] shadow-md  md:rounded outline-none overflow-hidden">
      <select
        className="bg-white md:pr-[3rem] w-[100%] outline-none "
        onChange={handleRegion}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterSelect;
