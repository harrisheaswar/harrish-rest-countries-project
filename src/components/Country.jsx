import React from "react";
import { Link } from "react-router-dom";
const Country = ({ id, flag, name, population, region, capital, darkMode }) => {
  let background = "bg-white";
  let text = "";
  let background2 = "bg-white";
  if (darkMode) {
    background = "bg-veryDarkBlue";
    background2 = "bg-darkBlue";
    text = "text-white";
  }

  return (
    <>
      <Link to={`/country/${id}`}>
        <div
          className={`${background2} flex flex-col md:w-[18rem] md:h-[21rem] shadow-md mb-[5rem] md:mx-[0.9rem] hover:scale-[103%]  rounded-md overflow-hidden`}
        >
          <div className="h-[55%]  ">
            <img className="w-full h-full " src={flag} />
          </div>

          <div className="h-[45%] py-3 pl-5">
            <h1 className="text-[1.1rem] font-[800] mb-[1rem]">{name}</h1>
            <p className="font-bold">
              Population:{" "}
              <span className="font-[400]">
                {population.toLocaleString("en-US")}
              </span>
            </p>
            <p className="font-bold">
              Region: <span className="font-[400]">{region}</span>
            </p>
            <p className="font-bold">
              Capital: <span className="font-[400]">{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Country;
