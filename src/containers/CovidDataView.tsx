import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { startCase } from "lodash";

import { StatesResponseData } from "types";
import { CovidBarChart } from "components/CovidBarChart";

export const CovidDataView = () => {
  const [cityData, setCityData] = useState<StatesResponseData | undefined>(
    undefined
  );
  const [cityList, setCityList] = useState<string[]>([]);
  const [city, setCity] = useState("los angeles");

  const fetchData = async (city: string) => {
    fetch(
      "https://corona.lmao.ninja/v2/historical/usacounties/california?lastdays=8"
    )
      .then((response) => response.json())
      .then((data) => {
        const chartData = data.find(
          (d: StatesResponseData) => d.county === city
        );
        setCityData(chartData);
      });
  };

  const createCityList = (data: any) => {
    const counties = data.map((d: StatesResponseData) => d.county);
    setCityList(counties);
  };

  useEffect(() => {
    fetchData("los angeles");
    cityData && createCityList(cityData);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<{ value: unknown; name?: string }>
  ) => {
    const newVal = e.target.value as string;
    setCity(newVal);
    fetchData(city);
  };

  return (
    <Container maxWidth="lg">
      {cityData ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl style={{ width: "50%" }}>
              <InputLabel id="city">City</InputLabel>
              <Select name="city" onChange={handleChange} value={city}>
                {cityList.map((city) => (
                  <MenuItem value={city} key={city}>
                    {startCase(city)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <h1>{city}</h1>
            <CovidBarChart data={cityData} />
          </Grid>
        </Grid>
      ) : (
        <div>loading...</div>
      )}
    </Container>
  );
};
