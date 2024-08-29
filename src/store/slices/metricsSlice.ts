import { createSlice } from "@reduxjs/toolkit";

interface MetricsState {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
}

const initialState: MetricsState = {
  totalUsers: 10000,
  activeUsers: 7500,
  totalStreams: 500000,
  revenue: 120000,
  topArtist: "Artist Name",
};

const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    // Define your reducers here if needed
  },
});

export const {} = metricsSlice.actions;
export default metricsSlice.reducer;
