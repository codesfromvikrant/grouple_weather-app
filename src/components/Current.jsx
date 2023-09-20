import React from "react";
import { useSelector } from "react-redux";
import DateTimeLocation from "./DateTimeLocation";

const Current = () => {
  const { location, current } = useSelector((state) => state.realtime);

  return (
    <div className="w-full py-3 px-4 bg-white rounded-xl h-full flex justify-between items-center flex-col">
      <div className="flex justify-between items-center gap-4">
        <DateTimeLocation />
        <div className="w-max">
          <div className="flex justify-start items-start gap-1 text-blue-600">
            <img
              src={current.condition?.icon && `https:${current.condition.icon}`}
              alt={current.condition?.text}
              className="w-20 h-20"
            />
            <span className="text-7xl font-semibold">{current.temp_c}</span>
            <span className="mt-3 text-3xl font-bold">&deg;</span>
            <span className="text-3xl font-bold mt-2">C</span>
          </div>

          <p className="text-center text-lg font-bold">
            {current.condition?.text}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-1 mt-4 text-sm font-medium text-gray-700">
        <p>
          Feels like {current.feelslike_c}
          <span>&deg;</span> C
        </p>
        {"."}
        <p className="">Humidity is {current.humidity}%</p>
        {"."}
        <p className="">Wind is Blowing at {current.wind_kph}Km/Hr</p>
      </div>
      <p className="text-center text-xs text-gray-700">
        Last Updated At : {current.last_updated}
      </p>
    </div>
  );
};

export default Current;
