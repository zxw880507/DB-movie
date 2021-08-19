import React from "react";
import { Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import { GitHub, LinkedIn, AccountCircle } from "@material-ui/icons";
import UserMenu from "./Menu";

const useStyles = makeStyles({
  button: {
    margin: "0 20px",
    color: "#fff",
    borderColor: "#fff",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
});
export default function IconButtonList(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      wrap="nowrap"
    >
      <IconButton aria-label="github" className={classes.button}>
        <GitHub fontSize="large" />
      </IconButton>
      <IconButton aria-label="linkedin" className={classes.button}>
        <LinkedIn fontSize="large" />
      </IconButton>
      {props.isAuth ? (
        <UserMenu {...props} />
      ) : (
        <Button
          variant="outlined"
          size="large"
          startIcon={<AccountCircle />}
          className={classes.button}
          onClick={props.openLogin}
        >
          LOGIN
        </Button>
      )}
    </Grid>
  );
}
