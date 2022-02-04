import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import get from "lodash/get";

import { StatesResponseData } from "types";

Chart.register(...registerables);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

interface IProps {
  data: StatesResponseData;
}

const calculateNewCases = (array: number[]) => {
  const result = array.reduce(
    (acc: number[], curr: number, i: number, src: number[]) => {
      if (i !== 0) acc.push(curr - src[i - 1]);
      return acc;
    },
    []
  );
  return result;
};

export const CovidBarChart = ({ data }: IProps) => {
  const getChartData = () => {
    const cases = get(data, "timeline.cases", {});
    const county = get(data, "county", "").toUpperCase();
    const label = `Covid-19 New Cases in ${county}`;
    const labels = Object.keys(cases);
    labels.shift();
    const values = Object.keys(cases).map((key) => cases[key]);
    const chartData = calculateNewCases(values);

    return {
      labels,
      datasets: [
        {
          label: label,
          data: chartData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 2,
        },
      ],
    };
  };

  return <Bar data={getChartData()} options={options} />;
};
