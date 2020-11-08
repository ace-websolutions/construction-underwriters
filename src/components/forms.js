import React from "react"
import {
  Paper,
  ButtonGroup,
  Button,
  makeStyles,
  Typography,
  Container,
  Grid,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
    minHeight: 150,
    maxWidth: "100vw",
  },
  wrapper: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 1000,
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
  paper: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
  },
}))

function Forms() {
  const classes = useStyles()

  return (
    <Container maxWidth="xl" id="forms" className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className={classes.wrapper}>
          <Grid item xs={12} style={{ marginBottom: "4rem" }}>
            <Typography variant="h3" align="center">
              Online Forms
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Contractor's Questionnaire
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Bond Information Sheet
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Personal Financial Statement
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Job Cost Breakdown
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Forms
