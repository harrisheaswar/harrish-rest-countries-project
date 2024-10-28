import Country from "./Country";
import { filterAndSearch } from "../util/filterAndSearch";
import { sortListBySelection } from "../util/sortListBySelection";
import { filterBySubRegion } from "../util/filterBySubRegion";

const CountriesList = ({
  country,
  sort,
  subRegion,
  region,
  countries,
  darkMode,
}) => {
  let countriesArr = filterAndSearch(countries, country, region);
  countriesArr = sortListBySelection(countriesArr, sort);
  countriesArr = filterBySubRegion(countriesArr, subRegion);

  let justify = "";
  if (countriesArr.length < 8) {
    justify = "evenly";
  } else {
    justify = "between";
  }

  if (countriesArr.length === 0)
    return (
      <div className="flex flex-col items-center  w-100% h-[auto] bg-gray-100">
        <h1 className="text-[5rem] mt-[5rem]">404 not Found</h1>
      </div>
    );

  return (
    <div
      className={` flex flex-col flex-wrap md:w-[100%] h-[auto] justify-${justify} items-center md:flex-row mt-[3rem]`}
    >
      {countriesArr.map((country, index) => (
        <Country
          id={country.cca3}
          key={index}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          justify={justify}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

export default CountriesList;
