import React from "react";
import { Container, makeStyles, Toolbar } from "@material-ui/core";
import Header from "./Header";
import SwiperList from "./SwiperList";
import { ProvideFavorites } from "../../hooks/providers/Favorites";
import { useAuth } from "../../hooks/providers/Auth";

const useStyles = makeStyles({
  root: {
    minWidth: 960,
    padding: 0,
  },
});
export default function Main() {
  const classes = useStyles();
  const { user } = useAuth().authState;
  return (
    <ProvideFavorites user={user}>
      <Container maxWidth="lg" className={classes.root}>
        <Toolbar />
        <Header />
        <SwiperList />
      </Container>
    </ProvideFavorites>
  );
}
