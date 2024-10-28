import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center  w-100% h-[100vh] bg-gray-100">
      <h1 className="text-[5rem] mt-[5rem]">404 Country not Found</h1>
      <Link to="/">
        <button
          className={` w-auto text-[1.5rem]  mx-[0.5rem] px-[0.5rem] mb-[0.5rem] font-[1.2rem] border-[1px] rounded hover:bg-gray-200 hover:text-black shadow-md`}
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
