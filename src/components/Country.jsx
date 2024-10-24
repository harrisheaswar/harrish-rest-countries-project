import React from "react";
const Country = ({ flag, name, population, region, capital }) => {
  return (
    <>
      <a href="#">
        <div className="flex flex-col w-[18rem] h-[20rem] shadow-md  mb-[5rem] md:mx-2 rounded-md overflow-hidden">
          <div className="h-[55%] ">
            <img className="w-full h-full md:object-cover" src={flag} />
          </div>

          <div className="h-[45%] py-3 pl-5">
            <h1 className="text-[1.1rem] font-[800] mb-[1rem]">{name}</h1>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital:<span>{capital}</span>
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Country;
