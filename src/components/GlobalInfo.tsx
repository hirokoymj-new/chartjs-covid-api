import Typography from "@material-ui/core/Typography";

interface IProps {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
}

export const GlobalInfo = (props: IProps) => {
  const { newConfirmed, newDeaths, newRecovered } = props;
  return (
    <>
      <Typography align="center" variant="h4">
        Global Covid 19 Data
      </Typography>
      <Typography align="center" variant="body1">
        New Confirmed: {new Intl.NumberFormat().format(newConfirmed)}
      </Typography>
      <Typography align="center" variant="body1">
        New Deaths: {new Intl.NumberFormat().format(newDeaths)}
      </Typography>
      <Typography align="center" variant="body1">
        New Recovered: {new Intl.NumberFormat().format(newRecovered)}
      </Typography>
    </>
  );
};
