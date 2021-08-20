import React, { useState, useRef, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    margin: "0 1.5em",
    color: "#fff",
    borderColor: "#fff",
    opacity: 0.7,
    fontSize: "1em",
    textTransform: "lowercase",
    "&:hover": {
      opacity: 1,
    },
  },
  menuContainer: {
    position: "absolute",
    top: "120%",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgba(13, 37, 63, .1)",
    whiteSpace: "nowrap",
    boxShadow:
      "inset 1px 1px 2em rgba(0,0,0,1), 0px 0px 0 2px rgba(255,255,255,.2)",
  },
  menuItem: {
    width: "100%",
    fontSize: "1.2em",
    fontFamily: "Anton",
    color: "#fff",
    opacity: 0.7,
    textAlign: "center",
    padding: "1em 2em",
    cursor: "pointer",
    "&:hover": {
      opacity: 1,
      backgroundColor: "rgba(255,255,255, .1)",
    },
  },
});
export default function UserMenu(props) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setShow((prev) => !prev);
  };
  useEffect(() => {
    const handleClose = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClose, false);
    return () => {
      document.removeEventListener("click", handleClose, false);
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100%" }} ref={ref}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        className={classes.button}
        onClick={handleClick}
      >
        {props.account}
      </Button>
      {show && (
        <div className={classes.menuContainer}>
          <div className={classes.menuItem}>My favorates</div>
          <div
            className={classes.menuItem}
            onClick={() => {
              handleClick();
              props.userLogout();
            }}
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
}
