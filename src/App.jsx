import React, { useEffect, useState } from "react";
import { currentWeather, forecastWeather } from "./api";
import Dashboard from "./components/Dashboard";
import { setLatitude, setLongitude } from "./features/navigationSlice";
import {
  setLocation,
  setCurrent,
  setAirQuality,
} from "./features/realtimeSlice";
import { setDayForecast } from "./features/forecastSlice";
import { useDispatch, useSelector } from "react-redux";
import useLocation from "./hooks/useLocation";

const App = () => {
  const dispatch = useDispatch();
  const latitude = useSelector((state) => state.navigation.latitude);
  const longitude = useSelector((state) => state.navigation.longitude);

  const { findMyLocation } = useLocation();

  const getRealTimeWeather = async () => {
    try {
      const location = `${latitude},${longitude}`;
      const data = await currentWeather(location);
      dispatch(setLocation(data.location));
      dispatch(setCurrent(data.current));
      dispatch(setAirQuality(data.current.air_quality));
    } catch (error) {
      console.error(error.code, error.message);
    }
  };
  const getForecastWeather = async () => {
    try {
      const location = `${latitude},${longitude}`;
      const data = await forecastWeather(location);
      dispatch(setDayForecast(data.forecast.forecastday));
    } catch (error) {
      console.error(error.code, error.message);
    }
  };
  useEffect(() => {
    getRealTimeWeather();
    getForecastWeather();
  }, [latitude, longitude]);

  /// Get User Location
  const getGeoLocation = () => {
    findMyLocation();
  };
  useEffect(() => {
    getGeoLocation();
  }, []);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
