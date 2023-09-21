import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";

const Graph = () => {
  const [labels, setLabels] = useState([]);
  const [temp, setTemp] = useState([]);
  const [rainChance, setRainChance] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const forecastDate = useSelector((state) => state.forecast.forecast_date);
  const weeklyforecast = useSelector((state) => state.forecast.day_forecast);

  useEffect(() => {
    const todayforecast = weeklyforecast?.filter(
      (el) => el.date == forecastDate
    )[0];

    setLabels(
      todayforecast?.hour.map((el) => {
        const date = new Date(el.time);
        return `${
          date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
        }:${
          date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
        }`;
      })
    );

    setTemp(
      todayforecast?.hour.map((el) => {
        return el.temp_c;
      })
    );

    setHumidity(
      todayforecast?.hour.map((el) => {
        return el.humidity;
      })
    );

    setRainChance(
      todayforecast?.hour.map((el) => {
        return el.chance_of_rain;
      })
    );
  }, [forecastDate, weeklyforecast]);

  return (
    <div className="bg-white mt-6 p-4 rounded-md">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              id: 1,
              fill: true,
              label: "Temperature in Celsius",
              data: temp,
              backgroundColor: "#2dd4be46",
              borderColor: "#2dd4bf",
            },
            {
              id: 2,
              fill: true,
              label: "Humidity in %",
              data: humidity,
              backgroundColor: "#38bff83f",
              borderColor: "#38bdf8",
            },
            {
              id: 3,
              fill: true,
              label: "Rain Chance in %",
              data: rainChance,
              backgroundColor: "#60a5fa5d",
              borderColor: "#3b82f6",
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
