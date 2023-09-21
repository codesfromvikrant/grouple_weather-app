import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
const initialState = {
  forecast_date: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`,
  day_forecast: [],
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    setForecastDate(state, action) {
      const newdate = new Date(action.payload);
      state.forecast_date = `${newdate.getFullYear()}-${newdate.getMonth() + 1 < 10 ? `0${newdate.getMonth() + 1}` : newdate.getMonth() + 1
        }-${newdate.getDate() < 10 ? `0${newdate.getDate()}` : newdate.getDate()}`;
    },
    setDayForecast(state, action) {
      state.day_forecast = action.payload;
    },
  },
});

export const { setForecastDate, setDayForecast } = forecastSlice.actions;

export default forecastSlice.reducer;
