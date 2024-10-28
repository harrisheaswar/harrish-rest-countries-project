import React from "react";
import BorderCountriesBtns from "./BorderCountriesBtns";

const DetailPageItems = ({ singleCountry, codeToCountryMap, darkMode }) => {
  let background = "bg-white";
  let text = "";
  let background2 = "bg-gray-100";
  if (darkMode) {
    background = "bg-veryDarkBlue";
    background2 = "bg-darkBlue";
    text = "text-white";
  }
  return (
    <div className="flex flex-col lg:flex-row lg:min-w-[40rem] h-auto md:justify-between w-[100%] mt-[5rem] overflow-hidden">
      <div className="flex justify-center items-center w-full md:max-w-[50rem]  md:max-h-[28rem] md:h-[100%] mb-[2rem] mr-[0rem] md:mr-[3rem] justify-center items-center overflow-hidden">
        <img
          className=" w-[40rem] "
          src={singleCountry.flags.png}
          alt="Country Flag"
        />
      </div>
      <div className="flex flex-col md:w-[40%]  items-start mr-[5rem] mt-[1rem] w-[40%]">
        <h1 className="text-[2rem] mb-[2rem] font-extrabold">
          {singleCountry.name.common}
        </h1>
        <div
          className={`flex flex-col justify-start lg:max-h-[10rem] md:flex-wrap  ${text}`}
        >
          <span className="mb-[0.5rem] font-extrabold mr-[1rem]">
            Native Name:
            <span className="ml-[0.5rem] font-[600]">
              {Object.entries(singleCountry.name.nativeName)[0][1].common}
            </span>
          </span>
          <span className="mb-[0.5rem] font-bold ">
            Population:
            <span className="ml-[0.5rem] font-[600] mr-[5rem]">
              {singleCountry.population.toLocaleString("en-US")}
            </span>
          </span>
          <span className="mb-[0.5rem] font-bold mr-[2rem]">
            Region:
            <span className="ml-[0.5rem] font-[600]">
              {singleCountry.region}
            </span>
          </span>
          <span className="mb-[0.5rem] font-bold mr-[2rem]">
            Sub-Region:
            <span className="ml-[0.5rem] font-[600]">
              {singleCountry.subregion}
            </span>
          </span>
          <span className="mb-[2rem] md:mb-[0.5rem] font-bold mr-[2rem]">
            Capital:
            <span className="ml-[0.5rem] font-[600]">
              {singleCountry.capital}
            </span>
          </span>
          <span className="mb-[0.5rem] font-bold mr-[2rem]">
            Top Level Domain:
            <span className="ml-[0.5rem] font-[600]">
              {singleCountry.tld[0]}
            </span>
          </span>
          <span className="mb-[0.5rem] font-bold mr-[2rem]">
            Currencies:
            <span className="ml-[0.5rem] font-[600]">
              {Object.entries(singleCountry.currencies)[0][1].name}
            </span>
          </span>
          <span className="mb-[0.5rem] font-bold mr-[1rem]">
            Languages:
            <span className="ml-[0.5rem] font-[600]">
              {Object.values(singleCountry.languages) + ","}
            </span>
          </span>
        </div>

        <div className={`flex flex-col lg:flex-row mt-[3rem] ${text}`}>
          <span className="block lg:flex-row mb-[0.5rem] font-bold">
            Border Countries:
          </span>
          {singleCountry.hasOwnProperty("borders") ? (
            <BorderCountriesBtns
              borders={singleCountry.borders}
              codeToCountryMap={codeToCountryMap}
              darkMode={darkMode}
            />
          ) : (
            <button
              className={`${background2} w-auto mx-[0.5rem] px-[0.5rem] font-[1.2rem] border-[1px] rounded`}
            >
              None
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPageItems;
