import React, { useState, useEffect } from "react";
import Country from "./Country";
const CountriesList = ({ country, region }) => {
  const [countries, setCountries] = useState([]);

  let url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        // Filtering countries based on input and select filter

        setCountries(data);
      } catch (err) {
        console.log("Error: Could not fetch the data", err);
      }
    };
    fetchCountries();
  }, []);

  let countriesArr = [];
  console.log(countries);
  countriesArr = countries.filter((countryData) => {
    if (country && region) {
      let countryRegex = new RegExp(country, "i");
      let regionRegex = new RegExp(region, "i");
      console.log(countryRegex);
      return (
        countryRegex.test(countryData.name.common) &&
        regionRegex.test(countryData.region)
      );
    } else if (country) {
      let countryRegex = new RegExp(country, "i");
      return countryRegex.test(countryData.name.common);
    } else if (region) {
      let regionRegex = new RegExp(region, "i");
      return regionRegex.test(countryData.region);
    }
    return true;
  });

  return (
    <div className="flex flex-col flex-wrap md:w-[100%] md:flex-row  justify-between items-center mt-[3rem] ">
      {countriesArr.map((country, index) => (
        <Country
          key={index}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
};

export default CountriesList;
