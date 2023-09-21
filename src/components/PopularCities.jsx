import React, { useState } from "react";
import tokyo from "../assets/icons/popular_citites/tokyo.jpg";
import hongkong from "../assets/icons/popular_citites/hong-kong.jpg";
import mumbai from "../assets/icons/popular_citites/mumbai.jpg";
import newyork from "../assets/icons/popular_citites/newyork.jpg";
import dubai from "../assets/icons/popular_citites/dubai.jpg";
import paris from "../assets/icons/popular_citites/paris.jpg";
import newcity from "../assets/icons/popular_citites/new-city.png";
import { nanoid } from "nanoid";

const PopularCities = () => {
  const [cities, setCities] = useState([
    {
      name: "Paris",
      image: paris,
    },
    {
      name: "Tokyo",
      image: tokyo,
    },
    {
      name: "Hong Kong",
      image: hongkong,
    },
    {
      name: "Mumbai",
      image: mumbai,
    },
    {
      name: "New York",
      image: newyork,
    },
    {
      name: "Dubai",
      image: dubai,
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
      <div key={nanoid()}>
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
