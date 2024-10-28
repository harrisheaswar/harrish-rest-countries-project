export function filterBySubRegion(countriesArr, subRegion) {
  return countriesArr.filter((country) => {
    if (subRegion) {
      if (country.subregion === subRegion) {
        return true;
      }
      return false;
    }
    return true;
  });
}
