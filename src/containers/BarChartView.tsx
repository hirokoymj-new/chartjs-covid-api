import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

import { GlobalInfo } from "components/GlobalInfo";
import { CountryList } from "components/CountryList";
import { BarChart } from "components/BarChart";
import { ResponseData, Country } from "types";

export const BarChartView = () => {
  const [data, setData] = useState<ResponseData | undefined>(undefined);
  const [activeCountry, setActiveCountry] = useState<Country[]>([]);

  const fetchData = async () => {
    const data: ResponseData = await fetch(
      "https://api.covid19api.com/summary"
    ).then((response) => response.json());
    setData(data);
    setActiveCountry(
      data.Countries.filter(
        (d) => d.CountryCode === "JP" || d.CountryCode === "US"
      )
    );
    const output = data.Countries.map((d) => d.CountryCode);
    console.log(output);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onItemClick = (country: Country) => {
    const found = activeCountry.find(
      (d) => d.CountryCode === country.CountryCode
    );
    if (found) {
      const result = activeCountry.filter((d) => d.Country !== country.Country);
      setActiveCountry([...result]);
    } else {
      setActiveCountry([...activeCountry, country]);
    }
  };

  return (
    <Container maxWidth="lg" style={{ backgroundColor: "lightgrey" }}>
      {data ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <GlobalInfo
              newConfirmed={data?.Global.NewConfirmed}
              newDeaths={data?.Global.NewDeaths}
              newRecovered={data?.Global.NewRecovered}
            />
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Paper>
              <BarChart countries={activeCountry} />
            </Paper>
          </Grid>
          <Grid container spacing={2}>
            <CountryList
              countries={data.Countries}
              onItemClick={onItemClick}
              activeCountry={activeCountry}
            />
          </Grid>
        </Grid>
      ) : (
        <div>loading...</div>
      )}
    </Container>
  );
};
