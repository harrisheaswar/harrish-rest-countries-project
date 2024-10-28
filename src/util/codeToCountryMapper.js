export function codeToCountryMapper(countries) {
  let map = new Map();

  countries.forEach((country) => {
    map.set(country.cca3, country.name.common);
  });

  return map;
}
