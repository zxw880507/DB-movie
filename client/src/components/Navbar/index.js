import React from "react";
import {
  AppBar,
  Container,
  Slide,
  makeStyles,
  useScrollTrigger,
} from "@material-ui/core";
import BarContent from "./BarContent";

const useStyles = makeStyles({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(13, 37, 63)",
  },
});
export default function HideOnScroll(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <AppBar className={classes.container}>
        <Container maxWidth="lg">
          <BarContent {...props} />
        </Container>
      </AppBar>
    </Slide>
  );
}
