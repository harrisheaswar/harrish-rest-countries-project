import React from "react";
import { sortSelectArr } from "../../util/sortSelectOptions";
sortSelectArr;
const SortSelect = ({ onSortType, darkMode }) => {
  let selectSortType = (e) => {
    onSortType(e.target.value);
  };

  let background = "bg-white";
  let text = "";
  let background2 = "bg-white";
  if (darkMode) {
    background = "bg-veryDarkBlue";
    background2 = "bg-darkBlue";
    text = "text-white";
  }

  return (
    <div
      className={`${background2} flex md:mr-[1rem] rounded-lg w-[50%] justify-center items-center md:px-5   md:w-auto h-[4rem] shadow-md mb-[1rem] md:rounded outline-none overflow-hidden`}
    >
      <select
        className={`${background2}  md:pr-[3rem] w-[100%] outline-none py-[1.5rem]`}
        onChange={selectSortType}
      >
        <option value="">Sort by</option>
        {sortSelectArr.map((selectItem, index) => {
          return (
            <option key={index} value={selectItem}>
              {selectItem}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SortSelect;
