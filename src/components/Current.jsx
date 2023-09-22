import React from "react";
import { useSelector } from "react-redux";
import DateTimeLocation from "./DateTimeLocation";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

const Current = () => {
  const { current } = useSelector((state) => state.realtime);
  const tempUnit = useSelector((state) => state.realtime.temp_unit);

  return (
    <div className="w-full md01:py-3 sm:py-3 py-5  px-4 bg-glassywhite shadow-md rounded-xl h-full flex justify-between items-center md01:flex-row flex-col">
      <DateTimeLocation />
      <div className="w-max flex justify-center items-center sm:my-0 my-2">
        <div className="flex justify-start items-start text-slate-600 font-Inter">
          <span className="text-8xl font-semibold">
            {tempUnit == "c" ? current?.temp_c : current.temp_f}
          </span>
          <span className="mt-3 text-3xl font-bold">&deg;</span>
          <span className="text-3xl font-bold mt-2">
            {tempUnit == "c" ? "C" : "F"}
          </span>
        </div>
        <img
          src={current.condition?.icon && `https:${current.condition.icon}`}
          alt={current.condition?.text}
          className="w-28 h-28"
        />
      </div>

      <div className="flex md01:justify-end sm:justify-center justify-start items-center md01:flex-col sm:flex-row flex-col md01:gap-2 sm:gap-2 gap-0 text-gray-800">
        <div className="flex md01:justify-end justify-center items-center gap-1 w-full">
          <p className="text-end text-base sm:font-bold font-extrabold w-max">
            Humidity is {current.humidity}%
          </p>
          <WiHumidity className="sm:text-3xl text-4xl text-slate-600" />
        </div>
        <div className="flex md01:justify-end justify-center items-center gap-1 w-full">
          <p className="text-end text-base sm:font-bold font-extrabold w-max">
            Feels like{" "}
            {tempUnit == "c" ? current.feelslike_c : current.feelslike_f}
            <span>&deg;</span> {tempUnit == "c" ? "C" : "F"}
          </p>
          <FaTemperatureLow className="text-slate-600 sm:text-2xl text-3xl" />
        </div>
        {/*  */}
        <div className="flex md01:justify-end justify-center items-center gap-2 w-full">
          <p className="text-end text-base sm:font-bold font-extrabold w-max">
            Wind is Blowing at {current.wind_kph}Km/Hr
          </p>{" "}
          <FaWind className="text-2xl text-slate-600" />
        </div>
      </div>
    </div>
  );
};

export default Current;
