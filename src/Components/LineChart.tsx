import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { userGrowthData } from "../Datasets/userGrowthData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">User Growth</h5>
        <Line data={userGrowthData} />
      </div>
    </div>
  );
};

export default LineChart;
