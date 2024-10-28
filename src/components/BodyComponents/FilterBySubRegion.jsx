import React from "react";
import { fetchSubRegions } from "../../util/fetchSubRegions";
const FilterBySubRegion = ({
  onSubRegionChange,
  region,
  countries,
  darkMode,
}) => {
  let subRegions = [];

  if (region) {
    subRegions = fetchSubRegions(countries, region);
    console.log(region);
  }

  const selectSubRegionChange = (e) => {
    onSubRegionChange(e.target.value);
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
      className={`${background2} flex md:mr-[1rem] rounded-lg w-[50%] justify-center items-center md:px-5 md:w-auto h-[4rem] shadow-md mb-[1rem] md:rounded outline-none overflow-hidden`}
    >
      <select
        className={`${background2} md:pr-[3rem] w-[100%] outline-none py-[1.5rem]`}
        onChange={selectSubRegionChange}
      >
        <option value="">Filter By Sub-Region</option>

        {subRegions.map((country, index) => {
          return (
            <option key={index} value={country.subregion}>
              {country.subregion}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterBySubRegion;
