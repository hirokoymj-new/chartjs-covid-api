import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Country } from "types";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
    cursor: "pointer",
  },
  activeCard: {
    margin: theme.spacing(1),
    cursor: "pointer",
    backgroundColor: "red",
  },
}));

interface IProps {
  countries: Country[];
  onItemClick: (country: Country) => void;
  activeCountry: Country[];
}

export const CountryList = ({
  countries,
  onItemClick,
  activeCountry,
}: IProps) => {
  const classes = useStyles();
  return (
    <>
      {countries.map((d) => {
        const result = activeCountry.filter(
          (country: Country) => country.Country === d.Country
        );
        const isActive = result.length > 0 ? true : false;
        return (
          <Grid item xs={4}>
            <Card
              key={d.CountryCode}
              classes={{ root: isActive ? classes.activeCard : classes.card }}
              onClick={() => onItemClick(d)}>
              <CardContent>
                <Typography variant="subtitle1">
                  <b>{d.Country}</b>
                </Typography>
                <Typography variant="body1">
                  New Confirmed: {d.NewConfirmed}
                </Typography>
                <Typography variant="body1">
                  New Deaths: {d.NewDeaths}
                </Typography>
                <Typography variant="body1">
                  New Recovered: {d.NewRecovered}
                </Typography>
                <Typography variant="body1">
                  Total Confirmed Case: {d.TotalConfirmed}
                </Typography>
                <Typography variant="body1">
                  Total Deaths: {d.TotalDeaths}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};
