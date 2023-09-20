import React from "react";
import AirQuality from "./AirQuality";
import { useSelector } from "react-redux";

const ForcastWeather = () => {
  const dayforecast = useSelector((state) => state.forecast.day_forecast);
  console.log(dayforecast);
  return (
    <div className="h-[100vh] w-[23rem] bg-blue-600 text-white p-4">
      <AirQuality />
    </div>
  );
};

export default ForcastWeather;
