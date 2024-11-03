import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getSingleCountry } from "../util/getSingleCountry";
import DetailPageItems from "../components/BodyComponents/DetailPageItems";

const DetailsPage = ({ countries, codeToCountryMap, darkMode }) => {
  const [singleCountry, setSingleCountry] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getSingleCountry(countries, id, setSingleCountry);
  }, [countries, id]);

  let background = "bg-gray-100";
  let text = "";
  let background2 = "bg-gray-100";
  if (darkMode) {
    background = "bg-veryDarkBlue";
    background2 = "bg-darkBlue";
    text = "text-white";
  }
  if (!singleCountry) return <div className="text-[3rem]">Loading...</div>;
  return (
    <div
      className={`${background} flex w-[100%] h-[auto] md:min-h-[100vh] justify-center`}
    >
      <div className="w-[85%] h-[60%] mt-[5rem]">
        <Link to={`/`} className="block">
          <button
            className={`${background2} w-[7rem] h-[2.5rem] text-center shadow-md rounded hover:bg-gray-200 hover:text-black`}
          >
            <i className="fas fa-arrow-left mr-[0.5rem]"></i> Back
          </button>
        </Link>
        <DetailPageItems
          singleCountry={singleCountry}
          codeToCountryMap={codeToCountryMap}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
