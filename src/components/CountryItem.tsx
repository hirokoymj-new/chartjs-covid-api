import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Country } from "types";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
  },
}));

interface IProps {
  country: Country;
  onClick: () => void;
}

export const CountryItem = ({ country }: IProps) => {
  const classes = useStyles();
  return (
    <Card key={country.CountryCode} classes={{ root: classes.card }}>
      <CardContent>
        <Typography variant="subtitle1">{country.Country}</Typography>
        <Typography variant="body1">
          New Confirmed: {country.NewConfirmed}
        </Typography>
        <Typography variant="body1">New Deaths: {country.NewDeaths}</Typography>
        <Typography variant="body1">
          New Recovered: {country.NewRecovered}
        </Typography>
      </CardContent>
    </Card>
  );
};
