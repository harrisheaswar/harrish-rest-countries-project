export function fetchSubRegions(countries, region) {
  let set = new Set();
  return countries.filter((country) => {
    if (country.region === region && !set.has(country.subregion)) {
      set.add(country.subregion);
      return true;
    }
    return false;
  });
}
