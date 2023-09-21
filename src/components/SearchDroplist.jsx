import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatitude, setLongitude } from "../features/navigationSlice";

const SearchDroplist = () => {
  const dispatch = useDispatch();
  const searchLocations = useSelector(
    (state) => state.navigation.search_locations
  );

  const changeLocation = (el) => {
    const { lat, lon } = el;
    dispatch(setLatitude(lat));
    dispatch(setLongitude(lon));
  };

  const list = searchLocations?.map((el) => {
    return (
      <div
        id={`${el.lat},${el.lon}`}
        onClick={() => changeLocation(el)}
        className="bg-white p-2 cursor-pointer hover:bg-gray-100 rounded-md"
      >
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
