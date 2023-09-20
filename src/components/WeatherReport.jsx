import React from "react";
import Current from "./Current";
import Header from "./Header";
import Map from "./Map";
import PopularCities from "./PopularCities";

const WeatherReport = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Header />
      <section className="flex justify-start items-start gap-6 mt-6 h-max">
        <Current />
        <Map />
      </section>
      <PopularCities />
    </div>
  );
};

export default WeatherReport;
