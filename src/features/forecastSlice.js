import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  day_forecast: [],
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setDayForecast(state, action) {
      state.day_forecast = action.payload;
    }
  },
});

export const { setDayForecast } = forecastSlice.actions;

export default forecastSlice.reducer;