import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "70%",
    padding: 0
  },
});
export default function BarContent() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.container}>
      <Typography variant="h6">Scroll to Hide App Bar</Typography>
    </Toolbar>
  );
}
