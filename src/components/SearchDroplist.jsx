import React from "react";
import { useSelector } from "react-redux";

const SearchDroplist = () => {
  const searchLocations = useSelector(
    (state) => state.navigation.search_locations
  );

  const list = searchLocations?.map((el) => {
    return (
      <div id={`${el.lat},${el.lon}`} className="bg-white p-2">
        <span className="text-slate-700 font-bold">
          {el.name}, {el.region}, {el.country}
        </span>
      </div>
    );
  });

  console.log(searchLocations);
  return (
    <div className="bg-white w-full z-[99] shadow-xl rounded-md p-2">
      {list}
    </div>
  );
};

export default SearchDroplist;
