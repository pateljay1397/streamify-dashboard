import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { topStreamedSongsData } from "../Datasets/topStreamedSongsData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Top 5 Streamed Songs</h5>
        <Bar data={topStreamedSongsData} />
      </div>
    </div>
  );
};

export default BarChart;
