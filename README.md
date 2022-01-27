# Bar Chart

**API**

https://api.covid19api.com/summary

**chart.js**
https://www.chartjs.org/docs/latest/charts/bar.html

```js
const data = {
  labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
```

```js
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
```

**react-chartjs-2**

https://react-chartjs-2.netlify.app/examples/vertical-bar-chart

# Line Chart

**Scale Title Configuration**

- [Scale Title Configuration](https://www.chartjs.org/docs/3.7.0/axes/labelling.html#scale-title-configuration)

- [Axes Common Configuration](https://www.chartjs.org/docs/3.7.0/axes/#common-configuration)

```js
    y: {
      min: 0, // Default config
      max: 6,
      ticks: {
        stepSize: 1,
      },
      title: { // Title config
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
```

- [In Chart.js set chart title, name of x axis and y axis?](https://stackoverflow.com/questions/27910719/in-chart-js-set-chart-title-name-of-x-axis-and-y-axis)
- [Labeling Axes](https://www.chartjs.org/docs/3.7.0/axes/labelling.html)

# Dataset Properties for Line Chart

**tension**

- `tension: number`
- streight line or curves

[Dataset Properties](https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties)

```js
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
```

# References

**Coronavirus COVID19 API**

- https://documenter.getpostman.com/view/10808728/SzS8rjbc
- https://stackoverflow.com/questions/30065227/run-open-vscode-from-mac-terminal
- https://github.com/reactchartjs/react-chartjs-2
