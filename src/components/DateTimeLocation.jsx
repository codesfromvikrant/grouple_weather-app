import React from "react";
import { useSelector } from "react-redux";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";

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

const DateTimeLocation = () => {
  const { location, current } = useSelector((state) => state.realtime);

  const date = new Date(location.localtime);
  const day = date.getDay();
  const todate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return (
    <div className="">
      <div className="text-blue-600 font-bold font-bebas flex justify-start items-center gap-2 text-4xl">
        <span>
          {hour > 12 ? `${hour - 12}` : hour} :{" "}
          {minute < 10 ? `0${minute}` : minute}
          {hour > 12 ? " PM" : " AM"}
        </span>
        <span className="text-gray-300">
          {current.is_day ? <FaCloudSun /> : <FaCloudMoon />}
        </span>
      </div>
      <div className="text-sm font-medium">
        {days[day]} {todate} {months[month]} {year}
      </div>
      <p className="font-bold  text-slate-700">
        {location.name}, {location.region}, {location.country}
      </p>
    </div>
  );
};

export default DateTimeLocation;
