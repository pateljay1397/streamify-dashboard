import { createSlice } from "@reduxjs/toolkit";
import { metrics } from "../../Datasets/metricsData";

interface MetricsState {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
}

const initialState: MetricsState = metrics;

const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    // Define your reducers here if needed
  },
});

export const {} = metricsSlice.actions;
export default metricsSlice.reducer;
