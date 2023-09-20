import React from "react";
import { BiCurrentLocation } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <div className="w-full">
        <div className="flex justify-start items-center gap-3 mb-3">
          <button className="flex justify-start items-center gap-2 bg-white p-3 rounded-lg text-gray-800 ">
            <BiCurrentLocation className="text-xl" />
            <span className="w-max text-sm font-semibold">
              Find My location
            </span>
          </button>
          <input
            type="text"
            placeholder="Search Location"
            className="p-3 rounded-lg text-sm placeholder:font-medium w-full bg-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
