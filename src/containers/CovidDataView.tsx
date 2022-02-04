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
  const [age, setAge] = React.useState(30); // <--------------(Like this).
  const [formValues, setFormValues] = useState({ city: "" });

  const fetchData = async (city: string) => {
    fetch(
      "https://corona.lmao.ninja/v2/historical/usacounties/california?lastdays=8"
    )
      .then((response) => response.json())
      .then((data) => {
        const data_los_angeles = data.find(
          (d: StatesResponseData) => d.county === city
        );
        setCityData(data_los_angeles);
        const counties = data.map((d: StatesResponseData) => d.county);
        setCityList(counties);
      });
  };

  useEffect(() => {
    fetchData("los angeles");
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string);
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
            <CovidBarChart data={cityData} />

            <FormControl>
              <Select value={age} onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      ) : (
        <div>loading...</div>
      )}
    </Container>
  );
};
