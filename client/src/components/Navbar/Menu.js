import React, { useState } from "react";
import { Button, Menu, MenuItem, makeStyles } from "@material-ui/core";

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
export default function SimpleMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        className={classes.button}
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>My favorates</MenuItem>
        <MenuItem
          onClick={() => {
            props.userLogout();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
