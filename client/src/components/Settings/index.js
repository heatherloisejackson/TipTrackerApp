import "./index.css";
import navBar from "../NavBar";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    textAlign: "left",
    paddingLeft: 30,
    paddingRight: 10,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    padding: '8px 16px 16px 33.3%',
    flexDirection: 'column',
    textAlign: 'left'
  }
}));

const Settings = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>About</Typography>
          <Typography className={classes.secondaryHeading}>
            MooLah Tip Tracking
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>
            Version 1.0.0
          </Typography>
          <Typography>
            Made with JavaScript, HTML, CSS, React, Express, Node, and GraphQL
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Your Account</Typography>
          <Typography className={classes.secondaryHeading}>
            See account details here
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>
            Name: {/* {account.firstName} {account.lastName}*/} Heather Jackson
          </Typography>
          <Typography>
            Username: {/* {account.username} */} hmjackson917
          </Typography>
          <Typography>
            Date Joined: {/* {account.dateCreated} */} 08/11/2021
          </Typography>
          <Typography>
            Company: {/* {account.company} */} Bok Bar
          </Typography>
          <Typography>
            Position: {/* {account.position} */} Bartender
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Theme</Typography>
          <Typography className={classes.secondaryHeading}>
            Choose between light and dark mode
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Help and Support</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>
            Send us an email if you are having any issues with the app or your account! Our team will get back to you in a timely manner.
          </Typography>
          <Typography>
            <a href = "mailto: heatherloisejackson@gmail.com">Support@MoolahTipTracker.com</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>About Us</Typography>
          <Typography className={classes.secondaryHeading}>
            MooLah Creators
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>
            MooLah Tip Tracking began as a student project for Alex Bradshaw,
            Michael DiSanto, Heather Jackson, and Sam Sweigart for the
            Unniversity of Pennsylvania's Full Stack Coding Bootcamp. Feel free to reach out to them!
          </Typography>
          <Typography>
            <a href = "https://github.com/alexbradshaw">Alex Bradshaw</a>
          </Typography>
          <Typography>
            <a href = "https://github.com/mdis928">Michael DiSanto</a>
          </Typography>
          <Typography>
            <a href = "https://github.com/heatherloisejackson">Heather Jackson</a>
          </Typography>
          <Typography>
            <a href = "https://github.com/gamgee-em">Sam Sweigart</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>Contribute</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>
            Check out the GitHub Repo for this application by clicking the icon below and feel free to contact us if you are interested in contributing.
          </Typography>
          <Typography>
            <a href = "https://github.com/heatherloisejackson/TipTrackerApp"><GitHubIcon/></a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}>Logout</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

// const Settings = () => {
//     return (
//         <div className='settings'>
//             <h2>Settings</h2>
//             { navBar }
//         </div>

//     )

// }

export default Settings;
