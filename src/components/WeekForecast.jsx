import React from "react";
import { useSelector } from "react-redux";
import { FaTemperatureLow } from "react-icons/fa";
import { TiWeatherSnow } from "react-icons/ti";
import { nanoid } from "nanoid";

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
  const dayforecast = useSelector((state) => state.forecast.day_forecast);

  const list = dayforecast.map((item) => {
    const date = new Date(item.date);
    return (
      <div
        key={nanoid()}
        className=" bg-glassywhite hover:bg-blue-700 transition-all duration-300 p-2 rounded-md flex justify-between items-center gap-4 cursor-pointer"
      >
        <div className="">
          <div className="flex justify-start items-center gap-2">
            <img
              src={`https:${item.day.condition.icon}`}
              alt={item.day.condition.text}
              className="w-10 h-10"
            />
            <p className="font-semibold text-xs tracking-wide">
              {item.day.condition.text}
            </p>
          </div>
          <p className="font-semibold text-xs tracking-wide">
            {months[date.getMonth()]} {date.getDate()} {date.getFullYear()}
            {", "}
            {days[date.getDay()]}
          </p>
        </div>
        <div className=" flex justify-start items-center gap-2">
          <FaTemperatureLow className="text-xl" />
          <span className="w-max text-xs font-semibold tracking-wider">
            {item.day.maxtemp_c}&deg;/{item.day.mintemp_c}&deg; C
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="">
      <div className="flex justify-start items-center gap-2 mb-2">
        <TiWeatherSnow className="text-2xl text-white" />
        <h3 className="text-xl  font-bold">Weekly Forecast</h3>
      </div>
      <div className="grid grid-cols-1 gap-2">{list}</div>
    </div>
  );
};

export default WeekForecast;
