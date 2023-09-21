import React from "react";
import ForcastWeather from "./ForcastWeather";
import WeatherReport from "./WeatherReport";

const Dashboard = () => {
  return (
    <main className="flex justify-start items-start w-full">
      <div className="w-full py-5 h-[100vh] overflow-y-auto">
        <WeatherReport />
      </div>
      <ForcastWeather />
    </main>
  );
};

export default Dashboard;
