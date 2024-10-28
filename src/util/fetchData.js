import { useEffect } from "react";

export function fetchData(setCountries) {
  let url = "/api/";
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
}
