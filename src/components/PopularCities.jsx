import React, { useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import tokyo from "../assets/icons/popular_citites/tokyo.jpg";
import hongkong from "../assets/icons/popular_citites/hong-kong.jpg";
import mumbai from "../assets/icons/popular_citites/mumbai.jpg";
import newyork from "../assets/icons/popular_citites/newyork.jpg";
import dubai from "../assets/icons/popular_citites/dubai.jpg";
import paris from "../assets/icons/popular_citites/paris.jpg";
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
    <section className="mt-6">
      <div className="flex justify-start items-start gap-6 overflow-x-auto pb-2">
        <div className="min-w-[150px] h-[150px] cursor-pointer bg-white shadow rounded-md flex justify-center items-center">
          <div className="">
            <div className="w-12 h-12 bg-slate-200 flex justify-center items-center rounded-full mx-auto">
              <BiSolidAddToQueue className="text-2xl mx-auto text-slate-600" />
            </div>
            <p className="text-base font-semibold text-center">Add City</p>
          </div>
        </div>
        {list}
      </div>
    </section>
  );
};

export default PopularCities;
