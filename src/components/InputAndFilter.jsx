import React from "react";
import SearchBar from "./BodyComponents/SearchBar";
import FilterSelect from "./BodyComponents/FilterSelect";
import SortSelect from "./BodyComponents/SortSelect";
import FilterBySubRegion from "./BodyComponents/FilterBySubRegion";
const InputAndFilter = ({
  onCountryInput,
  onSortType,
  onSubRegionChange,
  onRegionChange,
  region,
  countries,
  darkMode,
}) => {
  let isVisible = false;

  if (region) {
    isVisible = true;
  }

  return (
    <div
      className={`flex w-[100%] items:center  flex-col md:flex-row justify-between md:w-[100%]`}
    >
      <SearchBar onCountryInput={onCountryInput} darkMode={darkMode} />
      <SortSelect onSortType={onSortType} darkMode={darkMode} />
      {isVisible && (
        <FilterBySubRegion
          onSubRegionChange={onSubRegionChange}
          region={region}
          countries={countries}
          darkMode={darkMode}
        />
      )}
      <FilterSelect onRegionChange={onRegionChange} darkMode={darkMode} />
    </div>
  );
};

export default InputAndFilter;
