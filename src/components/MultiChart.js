import React from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function MultiChart({ chartData }) {
  return <Chart data={chartData} />;
}

export default MultiChart;
