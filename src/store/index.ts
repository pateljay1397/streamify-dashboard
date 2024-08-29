import { configureStore } from "@reduxjs/toolkit";
import metricsReducer from "./slices/metricsSlice";

const store = configureStore({
  reducer: {
    metrics: metricsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
