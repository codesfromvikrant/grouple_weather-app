import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle_sidebar: false,
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setToggleSidebar(state, action) {
      state.toggle_sidebar = action.payload;
    }
  },
});

export const { setToggleSidebar } = viewSlice.actions;

export default viewSlice.reducer;