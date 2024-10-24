import React, { useEffect, useState } from "react";
import InputAndFilter from "../components/InputAndFilter";
import CountriesList from "../components/CountriesList";

const HomePage = () => {
  const [inputCountry, setInputCountry] = useState("");

  const inputCountryChange = (inputCountry) => {
    setInputCountry(inputCountry);
  };

  const [selectRegion, setRegion] = useState("");
  const regionChange = (region) => {
    setRegion(region);
  };

  return (
    <div className="flex bg-gray-100 w-[100vw]">
      <div className="w-[100%] w-[80%] h-auto mx-auto mt-[3rem]">
        <InputAndFilter
          onCountryInput={inputCountryChange}
          onRegionChange={regionChange}
        />
        <CountriesList country={inputCountry} region={selectRegion} />
      </div>
    </div>
  );
};

export default HomePage;
