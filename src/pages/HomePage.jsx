import React from "react";
import InputAndFilter from "../components/InputAndFilter";
import CountriesData from "../components/CountriesData";

const HomePage = () => {
  return (
    <div className="flex bg-gray-100 w-[100vw]">
      <div className="w-[80%] h-auto mx-auto mt-[3rem]">
        <InputAndFilter />
        <CountriesData />
      </div>
    </div>
  );
};

export default HomePage;
