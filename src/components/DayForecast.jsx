import React from "react";
import Graph from "./Graph";
import MoreDetails from "./MoreDetails";
import WeekForecast from "./WeekForecast";

const DayForecast = () => {
  return (
    <section className="">
      <Graph />
      <WeekForecast />
      <MoreDetails />
    </section>
  );
};

export default DayForecast;
