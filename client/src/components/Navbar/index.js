import React from "react";
import AppBar from "@material-ui/core/AppBar";
import BarContent from "./BarContent";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

export default function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <AppBar>
        <BarContent />
      </AppBar>
    </Slide>
  );
}
