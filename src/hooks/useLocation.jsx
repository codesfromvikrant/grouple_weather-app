import React from "react";
import { useDispatch } from "react-redux";
import { setLatitude, setLongitude } from "../features/navigationSlice";

const useLocation = () => {
  const dispatch = useDispatch();
  const findMyLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        dispatch(setLatitude(position.coords.latitude));
        dispatch(setLongitude(position.coords.longitude));
        alert(
          `your location is ${position.coords.latitude},${position.coords.longitude}`
        );
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return { findMyLocation };
};

export default useLocation;
