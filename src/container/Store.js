import { configureStore } from "@reduxjs/toolkit";
import TrackerSlice from "./TrackerSlice/TrackerSlice";

const store = configureStore({
  reducer: { tracker: TrackerSlice },
});

export default store;
