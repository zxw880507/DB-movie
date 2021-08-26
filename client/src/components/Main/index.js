import React, { useEffect } from "react";
import { Container, makeStyles, Toolbar } from "@material-ui/core";
import Header from "./Header";
import SwiperList from "./SwiperList";
import { ProvideFavorites } from "../../hooks/providers/Favorites";
import { useAuth } from "../../hooks/providers/Auth";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { getUsername } from "../../helpers";
const useStyles = makeStyles({
  root: {
    minWidth: 960,
    padding: 0,
  },
});
export default function Main(props) {
  const classes = useStyles();
  const { user } = useAuth().authState;
  // const location = useLocation();
  // const history = useHistory();
  // console.log(user);
  // console.log(location);
  // console.log(history);
  console.log(props.location);

  return (
    <ProvideFavorites user={user}>
      <Container maxWidth="lg" className={classes.root}>
        <Toolbar />
        <Switch>
          <Route path={props.location.pathname}>
            <Header />
            <SwiperList />
          </Route>
          <Route
            exact
            path={`${props.location.pathname}/favorites`}
            render={() => <div>This is my favorite</div>}
          />
        </Switch>
      </Container>
    </ProvideFavorites>
  );
}
