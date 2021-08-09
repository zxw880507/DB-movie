import React from "react";
import { Container, makeStyles, Toolbar } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles({
  root: {
    minWidth: 960,
    padding: 0,
  },
});
export default function Main() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Toolbar />
      <Header />
    </Container>
  );
}
