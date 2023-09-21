import React from "react";
import { useSelector } from "react-redux";
import { PiWindBold } from "react-icons/pi";

const AirQuality = () => {
  const { air_quality } = useSelector((state) => state.realtime);

  return (
    <div className="w-full bg-white  backdrop-blur-md rounded-md p-2">
      <div className="flex justify-start items-center gap-2 mb-2 text-blue-600">
        <PiWindBold className="text-2xl" />
        <h3 className="text-lg font-extrabold tracking-wide">
          Air Quality Index
        </h3>
      </div>

      <div className="flex justify-start text-slate-700 items-start gap-1 flex-col text-sm w-full font-medium">
        <span>
          <span className="font-extrabold tracking-wider">(CO)</span> Carbon
          Monoxide : {air_quality?.co} µg/m³
        </span>
        <span>
          <span className="font-extrabold tracking-wider">(NO2)</span> Nitrogen
          Dioxide : {air_quality?.no2} µg/m³
        </span>
        <span>
          <span className="font-extrabold tracking-wider">(O3)</span> Ozon :{" "}
          {air_quality?.o3} µg/m³
        </span>
        <span>
          {" "}
          <span className="font-extrabold tracking-wider">(SO2)</span> Sulphur
          Dioxide : {air_quality?.so2} µg/m³
        </span>
        <span>
          <span className="font-extrabold tracking-wider">(PM10)</span>{" "}
          Particulate Matter 10 : {air_quality?.pm2_5} µg/m³
        </span>
      </div>
    </div>
  );
};

export default AirQuality;
