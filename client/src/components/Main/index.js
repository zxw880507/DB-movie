import React from "react";
import { Container, makeStyles, Toolbar } from "@material-ui/core";
import Swiper from "./Swiper";

const useStyles = makeStyles({
  root: {
    padding: 0,
    backgroundColor: "rgba(13, 37, 63, .8)",
  },
});
export default function Main() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Toolbar />
      <Swiper />
    </Container>
  );
}
