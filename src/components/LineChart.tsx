import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart Title",
      color: "#21618C",
      font: {
        size: 20,
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 6,
      ticks: {
        stepSize: 1,
      },
      title: {
        display: true,
        text: "Y Title",
        color: "#20B2AA",
        font: {
          size: 14,
          weight: "bold",
          family: "Arial",
        },
      },
    },
    x: {
      title: {
        display: true,
        text: "months",
        color: "#20B2AA",
        font: {
          size: 14,
          weight: "bold",
          family: "Arial",
        },
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May"];

const data = {
  labels,
  datasets: [
    {
      label: "Test Data 1",
      data: [3, 2, 2, 1, 5],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Test Data 2",
      data: [1, 3, 2, 2, 3],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const LineChart = () => {
  return <Line options={options} data={data} />;
};
