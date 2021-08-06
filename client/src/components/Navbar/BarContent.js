import React from "react";
import { Toolbar, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../image/movie_logo.svg";
import Search from "./Search";

const useStyles = makeStyles({
  container: {
    flexDirection: "row",
    width: "70%",
    padding: 0,
  },
  logo: {
    flex: 2,
  },
  right: {
    flex: 8,
    paddingLeft: 25,
  },
});
export default function BarContent() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.right}
        >
          <Search />
          <Typography variant="h6">Scroll to Hide App Bar</Typography>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
