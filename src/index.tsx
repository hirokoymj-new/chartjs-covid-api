import React from "react";
import ReactDOM from "react-dom";

import { BarChartView } from "containers/BarChartView";
import { LineChart } from "components/LineChart";
import { CovidDataView } from "containers/CovidDataView";

ReactDOM.render(
  <React.StrictMode>
    <CovidDataView />
  </React.StrictMode>,
  document.getElementById("root")
);
