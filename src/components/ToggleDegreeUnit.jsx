import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTempUnit } from "../features/realtimeSlice";

const ToggleDegreeUnit = () => {
  const dispatch = useDispatch();
  const tempUnit = useSelector((state) => state.realtime.temp_unit);

  return (
    <div className="flex justify-center items-center gap-2 text-xs font-bold">
      <p>Celcius</p>
      <div
        className={`${
          tempUnit == "c" ? "flex justify-start" : "flex justify-end"
        }"max-w-[4rem] h-[1rem] rounded-2xl bg-slate-500 items-center"`}
      >
        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
      </div>
      <p>Farenhite</p>
    </div>
  );
};

export default ToggleDegreeUnit;
