export function filterAndSearch(countries, country, region) {
  let countriesArr = [];

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

  return countriesArr;
}
