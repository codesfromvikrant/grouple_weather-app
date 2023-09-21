import React, { useState, useRef, useEffect } from "react";
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

  const inputRef = useRef(null);
  const dropRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setValue("");
        dispatch(setSearchLocations([]));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

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
        <div className="flex justify-start items-center sm:flex-row flex-col gap-3 mb-3">
          <button
            onClick={() => findMyLocation()}
            className="flex justify-start items-center gap-2 bg-white p-3 rounded-lg text-slate-800 sm:w-max w-full"
          >
            <BiCurrentLocation className="text-xl" />
            <span className="w-max text-sm font-bold">Find My location</span>
          </button>

          <div className="w-full relative">
            <input
              type="text"
              value={value}
              ref={inputRef}
              onChange={locationList}
              placeholder="Search Location"
              className="p-3 rounded-lg text-sm placeholder:font-medium font-bold w-full outline-[1px] outline-blue-300 bg-white"
            />
            <div
              ref={dropRef}
              className="absolute top-[3rem] w-full bg-glassywhite backdrop-blur-md z-[99]"
            >
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
