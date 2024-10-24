import React, { useState, useEffect } from "react";

const CountriesData = () => {
  const [countries, setCountries] = useState([]);

  let url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(url);
        const data = res.json();
        setCountries(data);
      } catch (err) {
        console.log("Error: Could not fetch the data", err);
      }
    };
    fetchCountries();
  }, []);
  return <div></div>;
};

export default CountriesData;
