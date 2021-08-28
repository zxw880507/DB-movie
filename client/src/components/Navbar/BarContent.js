import React from "react";
import { Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../image/movie_logo.svg";
import Search from "./Search";
import IconButtonList from "./IconButtonList";
import { useAuth } from "../../hooks/providers/Auth";
import { getUsername } from "../../helpers";

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
export default function BarContent() {
  const classes = useStyles();
  const { user } = useAuth().authState;
  const url = user ? getUsername(user.email) : "/";
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
          <a href={url}>
            <img src={logo} alt="logo" />
          </a>
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
          <IconButtonList url={url} />
        </Grid>
      </Grid>
    </Toolbar>
  );
}
