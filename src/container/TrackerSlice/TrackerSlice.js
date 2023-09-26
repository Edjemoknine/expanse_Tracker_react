import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  Total: 0,
  transaction: [],
};

const TrackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state, { payload }) => {
      state.user = null;
    },
    GetAllT: (state, { payload }) => {
      state.transaction = payload;
    },
  },
});

export default TrackerSlice.reducer;
export const { login, logout, GetAllT } = TrackerSlice.actions;
