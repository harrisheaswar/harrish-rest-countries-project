import React, { useState } from "react";
import InputAndFilter from "../components/InputAndFilter";
import CountriesList from "../components/CountriesList";

const HomePage = ({ countries, darkMode }) => {
  const [inputCountry, setInputCountry] = useState("");

  const inputCountryChange = (inputCountry) => {
    setInputCountry(inputCountry);
  };

  const [selectSortType, setSelectSortType] = useState("");
  const sortType = (sortChange) => {
    setSelectSortType(sortChange);
  };

  const [selectSubRegion, setSubRegion] = useState("");
  const subRegionChange = (subRegionOption) => {
    setSubRegion(subRegionOption);
  };

  const [selectRegion, setRegion] = useState("");
  const regionChange = (regionOption) => {
    subRegionChange("");
    setRegion(regionOption);
  };

  let background = "bg-gray-100";
  let text = "";
  let background2 = "";
  if (darkMode) {
    background = "bg-veryDarkBlue";
    background2 = "bg-darkBlue";
    text = "text-white";
  }

  return (
    <div className={`flex ${background} w-[100vw] min-h-[100vh]`}>
      <div className="w-[85%] h-[auto] mx-auto mt-[3rem]">
        <InputAndFilter
          onCountryInput={inputCountryChange}
          onSortType={sortType}
          onSubRegionChange={subRegionChange}
          onRegionChange={regionChange}
          region={selectRegion}
          countries={countries}
          darkMode={darkMode}
        />
        <CountriesList
          country={inputCountry}
          sort={selectSortType}
          subRegion={selectSubRegion}
          region={selectRegion}
          countries={countries}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default HomePage;
