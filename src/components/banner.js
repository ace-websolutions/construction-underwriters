import React from "react"
import { Link } from "react-scroll"
import { Typography, Button, makeStyles } from "@material-ui/core"
import image from "../images/bkg3.jpg"

const useStyles = makeStyles(theme => ({
  banner: {
    backgroundColor: "#3e3e3e",
    background: "url(" + image + ") center bottom no-repeat",
    backgroundSize: "cover",
    height: 700,
    position: "relative",
    width: "100vw",
    maxWidth: "100%",
    borderRadius: ".5rem",
  },
  content: {
    padding: theme.spacing(3),
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    color: "#fff",
    textShadow: "2px 2px #000",
  },
}))
function Banner() {
  const classes = useStyles()

  return (
    <div id="home" className={classes.banner}>
      <div className={classes.content}>
        <Typography variant="h4" className={classes.text}>
          Construction Underwriters, LLC
        </Typography>
        <Typography variant="h5" className={classes.text}>
          An Independent Surety Bond Agency
        </Typography>
        <Button variant="contained" color="primary" style={{ padding: "0" }}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ width: "100%", height: "100%", padding: ".5rem 1rem" }}
          >
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Banner
