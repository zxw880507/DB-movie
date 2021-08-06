import React from "react";
import AppBar from "@material-ui/core/AppBar";
import BarContent from "./BarContent";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    alignItems: "center"
  },
});
export default function HideOnScroll(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <AppBar className={classes.container}>
        <BarContent />
      </AppBar>
    </Slide>
  );
}
