import type { NextPage } from "next";
import { Grid, Typography } from "@material-ui/core";

// interface MyStoryPageProps {}

const MyStoryPage: NextPage = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h3" component="h1">
        My Story
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body1">This is a story</Typography>
    </Grid>
  </Grid>
);

// eslint-disable-next-line import/no-default-export
export default MyStoryPage;
