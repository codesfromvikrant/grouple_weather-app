import React from "react";
import { useDispatch } from "react-redux";
import { setLatitude, setLongitude } from "../features/navigationSlice";

const useLocation = () => {
  const dispatch = useDispatch();
  const findMyLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(setLatitude(position.coords.latitude));
      dispatch(setLongitude(position.coords.longitude));
    });
  };

  return { findMyLocation };
};

export default useLocation;
