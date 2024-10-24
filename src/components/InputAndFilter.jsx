import React from "react";
import SearchBar from "./BodyComponents/SearchBar";
import FilterSelect from "./BodyComponents/FilterSelect";

const InputAndFilter = ({ onCountryInput, onRegionChange }) => {
  return (
    <div className="flex w-[100%] items:center  flex-col md:flex-row justify-between md:w-[100%]">
      <SearchBar onCountryInput={onCountryInput} />
      <FilterSelect onRegionChange={onRegionChange} />
    </div>
  );
};

export default InputAndFilter;
