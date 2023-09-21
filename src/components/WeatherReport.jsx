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
      <section className="mt-3">
        <Current />

        <h3 className="text-slate-800 text-lg sm:mt-3 mt-4 mb-1 font-extrabold">
          Find Location on Map
        </h3>

        <Map />
      </section>
      <PopularCities />
      <DayForecast />
      <ToggleSidebar />
    </div>
  );
};

export default WeatherReport;
