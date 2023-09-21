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

  const date = new Date();
  const day = date.getDay();
  const todate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let hour = date.getHours();
  hour = hour > 12 ? hour - 12 : hour;
  const minute = date.getMinutes();

  return (
    <div className="flex justify-start items-start md01:flex-col sm:flex-row flex-col md01:gap-0 sm:gap-4 gap-0">
      <div className="text-blue-600 font-bold font-bebas flex justify-start items-center gap-2 text-4xl w-max">
        <span>
          {hour < 10 ? `0${hour}` : hour} :{" "}
          {minute < 10 ? `0${minute}` : minute}
          {hour > 12 ? " PM" : " AM"}
        </span>
        <span className="text-gray-300">
          {current.is_day ? <FaCloudSun /> : <FaCloudMoon />}
        </span>
      </div>
      <div className="">
        <div className="text-sm font-medium w-max">
          {days[day]} {todate} {months[month]} {year}
        </div>
        <p className="font-bold md01:text-base text-sm text-slate-700 w-max">
          {location.name}, {location.region}, {location.country}
        </p>
      </div>
    </div>
  );
};

export default DateTimeLocation;
