import React, { useEffect, useState } from "react";
import { GlobalInfo } from "./components/GlobalInfo";
import { ResponseData } from "./types";
import { CountryList } from "./components/CountryList";
import { CountryItem } from "./components/CountryItem";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Country } from "./types";
import { BarChart } from "./components/BarChart";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { count } from "console";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<ResponseData | undefined>(undefined);
  const [activeCountry, setActiveCountry] = useState<Country[]>([]);

  const fetchData = async () => {
    const data: ResponseData = await fetch(
      "https://api.covid19api.com/summary"
    ).then((response) => response.json());
    // const data: ResponseData = await result.json();

    setData(data);
    setActiveCountry(
      data.Countries.filter(
        (d) => d.CountryCode === "JP" || d.CountryCode === "US"
      )
    );
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

  console.log(data);

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

export default App;
