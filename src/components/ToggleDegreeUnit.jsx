import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTempUnit } from "../features/realtimeSlice";

const ToggleDegreeUnit = () => {
  const dispatch = useDispatch();
  const tempUnit = useSelector((state) => state.realtime.temp_unit);

  const toggleUnit = () => {
    if (tempUnit == "c") {
      dispatch(setTempUnit("f"));
    } else {
      dispatch(setTempUnit("c"));
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 text-sm text-slate-800 font-bold w-max">
      <p>Celcius</p>
      <div
        id="togglebar"
        onClick={toggleUnit}
        className={`${
          tempUnit == "c"
            ? "flex justify-start items-center"
            : "flex justify-end items-center"
        }" w-[3rem]  bg-gray-300 rounded-full p-1 cursor-pointer"`}
      >
        <div className="w-[0.8rem] h-[0.8rem] bg-blue-600 rounded-full"></div>
      </div>
      <p>Farenheite</p>
    </div>
  );
};

export default ToggleDegreeUnit;
