import React from "react";
import { Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../image/movie_logo.svg";
import Search from "./Search";
import IconButtonList from "./IconButtonList";

const useStyles = makeStyles({
  container: {
    minWidth: 960,
    flexDirection: "row",
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
export default function BarContent(props) {
  const classes = useStyles();

  return (
    <Toolbar className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        wrap="nowrap"
      >
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
          className={classes.right}
        >
          <Search />
          <IconButtonList {...props} />
        </Grid>
      </Grid>
    </Toolbar>
  );
}
