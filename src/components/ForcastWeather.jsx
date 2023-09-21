import React from "react";
import AirQuality from "./AirQuality";
import WeekForecast from "./WeekForecast";
import { useSelector } from "react-redux";

const ForcastWeather = () => {
  const toggleSidebar = useSelector((state) => state.view.toggle_sidebar);
  return (
    <div
      className={`${
        toggleSidebar ? "" : "lg:block hidden"
      } " h-[100vh] z-[99] overflow-y-auto bg-blue-600 text-white p-4 lg:static fixed top-0 left-0"`}
    >
      <WeekForecast />
    </div>
  );
};

export default ForcastWeather;
