import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTemperatureLow } from "react-icons/fa";
import { TiWeatherSnow } from "react-icons/ti";
import { nanoid } from "nanoid";
import { setForecastDate } from "../features/forecastSlice";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeekForecast = () => {
  const dispatch = useDispatch();
  const dayforecast = useSelector((state) => state.forecast.day_forecast);
  const tempUnit = useSelector((state) => state.realtime.temp_unit);

  const showForecast = (date) => {
    dispatch(setForecastDate(date));
  };

  const list = dayforecast.map((item) => {
    const date = new Date(item.date);
    return (
      <div
        key={nanoid()}
        onClick={() => showForecast(date)}
        className="  text-white bg-blue-700 transition-all duration-300 p-4 rounded-md  cursor-pointer"
      >
        <p className="font-bold md:text-lg sm:text-base text-lg tracking-wide">
          {months[date.getMonth()]} {date.getDate()} {date.getFullYear()}
          {", "}
          {days[date.getDay()]}
        </p>
        <div className="flex justify-start items-center text-gray-200 gap-1">
          <img
            src={`https:${item.day.condition.icon}`}
            alt={item.day.condition.text}
            className="w-10 h-10"
          />
          <p className="font-bold text-base tracking-wide">
            {item.day.condition.text}
          </p>
        </div>
        <div className="ml-2 flex justify-start items-center text-gray-200 gap-2">
          <FaTemperatureLow className="text-2xl" />
          <span className="w-max text-base font-bold tracking-wider">
            {tempUnit == "c" ? item.day.maxtemp_c : item.day.maxtemp_f}&deg;/
            {tempUnit == "c"
              ? item.day.mintemp_c
              : item.day.mintemp_f}&deg; {tempUnit == "c" ? "C" : "F"}
          </span>
        </div>
        <div className="w-full"></div>
      </div>
    );
  });

  return (
    <>
      <div className="flex justify-start items-center gap-2 mt-6 mb-2">
        <TiWeatherSnow className="text-2xl text-slate-800" />
        <h3 className="text-xl text-slate-800 font-extrabold">
          Weekly Forecast
        </h3>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">{list}</div>
    </>
  );
};

export default WeekForecast;
