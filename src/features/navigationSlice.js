import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: 28.6139,
  longitude: 77.2090,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setLatitude(state, action) {
      state.latitude = action.payload;
    },
    setLongitude(state, action) {
      state.longitude = action.payload;
    },
  },
});

export const { setLatitude, setLongitude } = navigationSlice.actions;

export default navigationSlice.reducer;