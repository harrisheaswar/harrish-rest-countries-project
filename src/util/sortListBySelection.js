export function sortListBySelection(countriesArr, sort) {
  let sortedArr = [];
  if (sort === "Ascending: Population") {
    sortedArr = countriesArr.sort((a, b) => a.population - b.population);
  } else if (sort === "Descending: Population") {
    sortedArr = countriesArr.sort((a, b) => b.population - a.population);
  } else if (sort === "Ascending: Area-size") {
    sortedArr = countriesArr.sort((a, b) => a.area - b.area);
  } else if (sort === "Descending: Area-size") {
    sortedArr = countriesArr.sort((a, b) => b.area - a.area);
  } else {
    return countriesArr;
  }

  return sortedArr;
}
