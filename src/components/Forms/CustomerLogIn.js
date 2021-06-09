import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "./useForm";
import validate from "./validateInfo";
import Container from "@material-ui/core/Container";
import Logo from "./Logo";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    padding:"8%",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },

  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginBottom: theme.spacing(1),
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    paddingTop: "15vh",
  },

  submit: {
    color: "#fff",
    backgroundColor: "hsl(241, 87%, 62%)",
    margin: theme.spacing(3, 2, 3, 0),
    "&:hover": {
      backgroundColor: "hsl(241, 87%, 52%)",
      boxShadow: "none",
    },
  },
}));

const CustomerLogin = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Logo />
      <Grid item xs={12} sm={7} md={7} component={Paper} elevation={6} square>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Login to TasksTech
            </Typography>
            <p>*Required</p>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter your Email"
                name="email"
                placeholder="youremail@mail.com"
                value={values.email}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Enter your password"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <div className={classes.links}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign up"}
                </Link>
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Next
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                [TRADIES - NEXT]
              </Button>
            </form>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default CustomerLogin;