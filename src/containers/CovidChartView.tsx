import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { startCase } from "lodash";
import { Typography } from "@material-ui/core";

import { StatesResponseData } from "types";
import { NewCasesChart, DeathsChart } from "components/CovidChart";

export const CovidChartView = () => {
  const [apiData, setAPIData] = useState<StatesResponseData | undefined>(
    undefined
  );
  const [countyList, setCountyList] = useState<string[]>([]);
  const [county, setCounty] = useState<string>("los angeles");

  const fetchCovidData = async () => {
    fetch(
      "https://corona.lmao.ninja/v2/historical/usacounties/california?lastdays=15"
    )
      .then((response) => response.json())
      .then((data) => {
        const chartData = data.find(
          (d: StatesResponseData) => d.county === county
        );
        setAPIData(chartData);
        const counties = data.map((d: StatesResponseData) => d.county);
        setCountyList(counties);
      });
  };

  useEffect(() => {
    fetchCovidData();
  }, [county]);

  const handleChange = (
    e: React.ChangeEvent<{ value: unknown; name?: string }>
  ) => {
    const newVal = e.target.value as string;
    setCounty(newVal);
  };

  return (
    <Container maxWidth="lg">
      {apiData ? (
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Typography variant="h5">California</Typography>
            <FormControl style={{ width: "50%" }}>
              <InputLabel id="county">county</InputLabel>
              <Select name="county" onChange={handleChange} value={county}>
                {countyList.map((county) => (
                  <MenuItem value={county} key={county}>
                    {startCase(county)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">New Cases:</Typography>
            <NewCasesChart data={apiData} county={startCase(county)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Deaths:</Typography>
            <DeathsChart data={apiData} county={startCase(county)} />
          </Grid>
        </Grid>
      ) : (
        <div>loading...</div>
      )}
    </Container>
  );
};
