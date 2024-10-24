import React from "react";
import SearchBar from "./SearchBar";
import FilterSelect from "./FilterSelect";

const InputAndFilter = () => {
  return (
    <div className="flex justify-between w-[100%]">
      <SearchBar />
      <FilterSelect />
      <CountriesData />
    </div>
  );
};

export default InputAndFilter;
