import React from "react";
import AirQuality from "./AirQuality";

import WeekForecast from "./WeekForecast";

const ForcastWeather = () => {
  return (
    <div className="h-[100vh] overflow-y-auto  bg-blue-600 text-white p-4">
      {/* <AirQuality /> */}
      <WeekForecast />
    </div>
  );
};

export default ForcastWeather;
