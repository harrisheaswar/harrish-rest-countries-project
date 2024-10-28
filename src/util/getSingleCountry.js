import { useEffect } from "react";

export function getSingleCountry(countries, code, setSingleCountry) {
  useEffect(() => {
    const country = async () => {
      let country = await countries.find((country) => country.cca3 === code);
      setSingleCountry(country);
    };
    country();
  }, [countries, code]);
}
