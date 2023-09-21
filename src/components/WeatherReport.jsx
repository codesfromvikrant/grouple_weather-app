import React from "react";
import Current from "./Current";
import Header from "./Header";
import Map from "./Map";
import PopularCities from "./PopularCities";
import DayForecast from "./DayForecast";
import ToggleSidebar from "./ToggleSidebar";

const WeatherReport = () => {
  return (
    <div className="max-w-5xl  mx-auto px-4">
      <Header />
      <section className="flex justify-start items-start flex-col gap-5 mt-5 h-max ">
        <Current />
        <Map />
      </section>
      <PopularCities />
      <DayForecast />
      <ToggleSidebar />
    </div>
  );
};

export default WeatherReport;
