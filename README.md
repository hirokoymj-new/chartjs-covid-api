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

# References

**Coronavirus COVID19 API**

- https://documenter.getpostman.com/view/10808728/SzS8rjbc
- https://stackoverflow.com/questions/30065227/run-open-vscode-from-mac-terminal
- https://github.com/reactchartjs/react-chartjs-2
