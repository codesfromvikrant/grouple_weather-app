import React from "react";
import { useSelector } from "react-redux";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

const MoreDetails = () => {
  const forecastDate = useSelector((state) => state.forecast.forecast_date);
  const weeklyforecast = useSelector((state) => state.forecast.day_forecast);
  const tempUnit = useSelector((state) => state.navigation.temp_unit);
  const todayforecast = weeklyforecast?.filter(
    (el) => el.date == forecastDate
  )[0];

  console.log(todayforecast);
  return (
    <div className="mt-8">
      <h3 className="text-xl font-extrabold mb-2 text-slate-800">
        More Details of Today's Forecast
      </h3>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
        <div className="bg-white py-3 rounded-md flex justify-center items-center gap-3">
          <img src={todayforecast?.day.condition.icon} alt="" />
          <p className="text-slate-800 font-extrabold">
            {todayforecast?.day.condition.text}
          </p>
        </div>
        <div className="bg-white py-3 rounded-md flex justify-center items-center gap-3">
          <FaTemperatureLow className="text-5xl text-slate-600" />
          <div className="font-extrabold text-slate-800">
            <p>
              Max Temp:{" "}
              {tempUnit == "c"
                ? todayforecast?.day.maxtemp_c
                : todayforecast?.day.maxtemp_f}
              &deg;{tempUnit == "c" ? "C" : "F"}
            </p>
            <p>
              Min Temp:{" "}
              {tempUnit == "c"
                ? todayforecast?.day.mintemp_c
                : todayforecast?.day.mintemp_f}
              &deg;
              {tempUnit == "c" ? "C" : "F"}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md flex justify-center items-center gap-3 py-3">
          <WiHumidity className="text-6xl text-slate-600" />
          <div className="font-extrabold text-slate-800">
            <p>Humidity: {todayforecast?.day.avghumidity}%</p>
            <p>Chance of Rain: {todayforecast?.day.daily_chance_of_rain}%</p>
          </div>
        </div>
        <div className="bg-white rounded-md flex justify-center items-center gap-3 py-3">
          <FaWind className="text-5xl text-slate-600" />
          <div className="font-extrabold text-slate-800">
            <p>Max Wind: {todayforecast?.day.maxwind_kph} Kph</p>
            <p>Precipitation: {todayforecast?.day.totalprecip_mm} mm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
