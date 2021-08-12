import React from "react";
import { Grid } from "@material-ui/core";
import Swiper from "./Swiper";
const tabs = [
  { title: "What's Popular", types: ["Movie", "TV"] },
  { title: "Explore Movies", types: ["In Theaters", "Top Rated", "Upcoming"] },
  { title: "What's On TV", types: ["On The Air", "Top Rated"] },
  { title: "Lastest Trailers", types: ["In Theaters", "On TV"] },
];
export default function SwpiperList() {
  return (
    <Grid
      style={{ margin: "2em 0" }}
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {tabs.map((tab) => (
        <Swiper tab={tab} />
      ))}
    </Grid>
  );
}
