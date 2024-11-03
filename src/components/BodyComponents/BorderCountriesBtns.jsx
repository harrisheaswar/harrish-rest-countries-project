import React from "react";
import { Link } from "react-router-dom";

const BorderCountriesBtns = ({ borders, codeToCountryMap, darkMode }) => {
  let background = "bg-white";
  let text = "";
  let background2 = "bg-gray-100";
  if (darkMode) {
    background = "bg-veryDarkBlue";
    background2 = "bg-darkBlue";
    text = "text-white";
  }
  return (
    <>
      {borders.map((border) => (
        <Link key={border} to={`/country/${border}`}>
          <button
            key={border}
            id={border}
            className={`${background2} w-auto  mx-[0.5rem] px-[0.5rem] mb-[0.5rem] font-[1.2rem] border-[1px] rounded hover:bg-gray-200 hover:text-black shadow-md`}
          >
            {codeToCountryMap.get(border)}
          </button>
        </Link>
      ))}
    </>
  );
};

export default BorderCountriesBtns;
