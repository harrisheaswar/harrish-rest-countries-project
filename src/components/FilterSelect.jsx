import React from "react";

const FilterSelect = () => {
  return (
    <div className="flex px-5 py-4 bg-white w-auto h-auto shadow-md  rounded outline-none">
      <select className="bg-white pr-[3rem]">
        <option value="">Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};

export default FilterSelect;
