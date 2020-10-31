import type { NextPage } from "next";
import { Grid, Typography } from "@material-ui/core";

// interface IndexProps {
// }

const HomePage: NextPage = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h3" component="h1">
        Home
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body1">This is a website!</Typography>
    </Grid>
  </Grid>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
