import React, { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { setSearchLocations } from "../features/navigationSlice";
import { searchLocation } from "../api";
import { useDispatch, useSelector } from "react-redux";
import SearchDroplist from "./SearchDroplist";
import useLocation from "../hooks/useLocation";
import ToggleDegreeUnit from "./ToggleDegreeUnit";

const Header = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const searchLocations = useSelector(
    (state) => state.navigation.search_locations
  );
  const { findMyLocation } = useLocation();

  const locationList = async (e) => {
    setValue(e.target.value);
    try {
      const data = await searchLocation(e.target.value);
      console.log(data);
      dispatch(setSearchLocations(data));
    } catch (error) {
      console.error(error.code, error.message);
    }
  };

  return (
    <header>
      <div className="w-full">
        <div className="flex justify-start items-center gap-3 mb-3">
          <button
            onClick={() => findMyLocation()}
            className="flex justify-start items-center gap-2 bg-white p-3 rounded-lg text-gray-800 "
          >
            <BiCurrentLocation className="text-xl" />
            <span className="w-max text-sm font-semibold">
              Find My location
            </span>
          </button>
          <div className="w-full relative">
            <input
              type="text"
              value={value}
              onChange={locationList}
              placeholder="Search Location"
              className="p-3 rounded-lg text-sm placeholder:font-medium font-bold w-full bg-white"
            />
            <div className="absolute top-[3rem] w-full bg-glassywhite backdrop-blur-md z-[99]">
              {searchLocations?.length > 0 && <SearchDroplist />}
            </div>
          </div>
          <ToggleDegreeUnit />
        </div>
      </div>
    </header>
  );
};

export default Header;
