import React, { useState } from "react";
import tokyo from "../assets/icons/popular_citites/tokyo.jpg";
import hongkong from "../assets/icons/popular_citites/hong-kong.jpg";
import mumbai from "../assets/icons/popular_citites/mumbai.jpg";
import newyork from "../assets/icons/popular_citites/newyork.jpg";
import dubai from "../assets/icons/popular_citites/dubai.jpg";
import paris from "../assets/icons/popular_citites/paris.jpg";
import newcity from "../assets/icons/popular_citites/new-city.png";
import { setLatitude, setLongitude } from "../features/navigationSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

const PopularCities = () => {
  const dispatch = useDispatch();
  const [cities, setCities] = useState([
    {
      name: "Paris",
      image: paris,
      lat: "48.8566",
      lon: "2.3522",
    },
    {
      name: "Tokyo",
      image: tokyo,
      lat: "35.6762",
      lon: "139.6503",
    },
    {
      name: "Hong Kong",
      image: hongkong,
      lat: "22.3193",
      lon: "114.1694",
    },
    {
      name: "Mumbai",
      image: mumbai,
      lat: "19.0760",
      lon: "72.8777",
    },
    {
      name: "New York",
      image: newyork,
      lat: "40.7128",
      lon: "74.0060",
    },
    {
      name: "Dubai",
      image: dubai,
      lat: "25.2048",
      lon: "55.2708",
    },
  ]);

  const list = cities.map((city) => {
    const style = {
      background: `url(${city.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "150px",
      height: "150px",
    };
    return (
      <div
        key={nanoid()}
        onClick={() => {
          dispatch(setLatitude(city.lat));
          dispatch(setLongitude(city.lon));
        }}
        className="cursor-pointer bg-white rounded-md p-2"
      >
        <div style={style} className="rounded-md" />
        <span className="text-sm font-medium">{city.name}</span>
      </div>
    );
  });
  return (
    <section className="mt-3">
      <h3 className="text-gray-700 text-lg mb-1 font-extrabold">
        Popular Cities
      </h3>
      <div className="flex justify-start items-start gap-6 overflow-x-auto pb-2">
        {list}
      </div>
    </section>
  );
};

export default PopularCities;
