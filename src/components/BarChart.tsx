import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import { Country } from "types";

Chart.register(...registerables);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

interface IProps {
  countries: Country[];
}
export const BarChart = ({ countries }: IProps) => {
  const getChartData = () => {
    const data: number[] = [];
    const labels: string[] = [];

    countries.forEach((country) => {
      data.push(country.NewConfirmed);
      labels.push(country.Country);
    });

    return {
      labels,
      datasets: [
        {
          label: "New Confirmed",
          data,
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
