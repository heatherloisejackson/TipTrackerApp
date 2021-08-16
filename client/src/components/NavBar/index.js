import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SettingsIcon from "@material-ui/icons/Settings";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./index.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: 0,
    top: "auto",
    backgroundColor: "#60935D",
    color: "#F7F3E3",
    position: "fixed",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -20,
    left: 0,
    right: 0,
    margin: "0 auto",
    color: "#F7F3E3",
    backgroundColor: "#2E282A",
    "&:hover": {
      backgroundColor: "#CD5334",
    },
  },
  iconColor: {
    color: "#F7F3E3",
    fontWeight: "bold",
  },
  label: {
    color: "#F7F3E3",
    "&:hover": {
      color: "#2E282A",
    },
  },
});

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("News");

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.label}
        label="Home"
        icon={<HomeIcon className={classes.iconColor} />}
        value="MyTips"
        component={Link}
        to={"MyTips"}
      />
      <BottomNavigationAction
        className={classes.label}
        label="Stats"
        icon={<EqualizerIcon className={classes.iconColor} />}
        value="Graph"
        component={Link}
        to={"Graph"}
      />

      <Fab color="secondary" aria-label="add" className={classes.fabButton} href={"MyTips"}>
        <AddIcon />
      </Fab>

      <BottomNavigationAction
        className={classes.label}
        label="News"
        icon={<MenuBookIcon className={classes.iconColor} />}
        value="News"
        component={Link}
        to={"News"}
      />
      <BottomNavigationAction
        className={classes.label}
        label="Settings"
        icon={<SettingsIcon className={classes.iconColor} />}
        value="Settings"
        component={Link}
        to={"Settings"}
      />
    </BottomNavigation>
  );
};

export default NavBar;
