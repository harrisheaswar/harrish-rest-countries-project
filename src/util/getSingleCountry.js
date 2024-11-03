export function getSingleCountry(countries, code, setSingleCountry) {
  const country = async () => {
    let country = await countries.find((country) => country.cca3 === code);
    setSingleCountry(country);
  };
  country();
}
