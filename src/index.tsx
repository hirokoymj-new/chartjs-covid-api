import React from "react";
import ReactDOM from "react-dom";

import { BarChartView } from "containers/BarChartView";
import { LineChart } from "components/LineChart";
import { CovidChartView } from "containers/CovidChartView";

ReactDOM.render(
  <React.StrictMode>
    <CovidChartView />
  </React.StrictMode>,
  document.getElementById("root")
);
