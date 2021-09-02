import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Menu,
  MenuItem,
  IconButton,
  Button,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

import iconRide from "../static/images/bikeride.jpeg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const user = localStorage.getItem("user");

  const [auth, setAuth] = useState(user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setAuth(localStorage.getItem("user"));
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.removeItem("user");
    handleClose();
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img src={iconRide} width="50" height="50" />
        <Typography variant="h6" className={classes.title}>
          MY RIDE
        </Typography>
        {localStorage.getItem("user") && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              size="medium"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <MenuItem onClick={() => logOut()}>Salir</MenuItem>
              </Link>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
