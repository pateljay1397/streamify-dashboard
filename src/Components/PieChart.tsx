import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { revenueDistributionData } from "../Datasets/revenueDistributionData";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Revenue Distribution</h5>
        <Pie data={revenueDistributionData} />
      </div>
    </div>
  );
};

export default PieChart;
