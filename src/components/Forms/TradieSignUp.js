import React, { useState, useCallback } from "react";
import { useDispatch } from 'react-redux'
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";
import {signUp} from "../../actions/action"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row-reverse",
        paddingTop: "15vh",
    },

    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(10),
    },
    submit: {
        margin: theme.spacing(3, 2, 3, 6),
    },
}));

export default function TradieSignUp() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState(""),
        [lastname, setLastname] = useState(""),
        [email, setEmail] = useState(""),
        [phone, setPhone] = useState(""),
        [description, setDescription] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState("");

    const inputFirstname = useCallback(
        (event) => {
            setFirstname(event.target.value);
        },
        [setFirstname]
    );

    const inputLastname = useCallback(
      (event) => {
          setLastname(event.target.value);
      },[setLastname]);

    const inputPhone = useCallback(
        (event) => {
            setPhone(event.target.value);
        },[setPhone]);

    const inputEmail = useCallback(
        (event) => {
            setEmail(event.target.value);
        },[setEmail]);

    const inputPassword = useCallback(
        (event) => {
            setPassword(event.target.value);
        },[setPassword]);

    const inputConfirmPassword = useCallback(
        (event) => {
            setConfirmPassword(event.target.value);
        },[setConfirmPassword]);

        const inputDescription = useCallback(
          (event) => {
              setDescription(event.target.value);
          },[setDescription]);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Logo />
            <Grid
                item
                xs={12}
                sm={7}
                md={7}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4">
                        Tradies Sign up
                    </Typography>
                    <div className={classes.form}>
                      {/* <form className={classes.form} > */}
                      <Grid container spacing={3}>
                            <Grid container>
                                <Grid item>
                                    <Link href="login" variant="body2">
                                        {"Already have a account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="name"
                                    name="firstName"
                                    variant="outlined"
                                    fullWidth
                                    id="firstName"
                                    label="First Name*"
                                    autoFocus
                                    value={firstname}
                                    onChange={inputFirstname}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="lastName"
                                    label="Last Name*"
                                    name="lastName"
                                    autoComplete="name"
                                    value={lastname}
                                    onChange={inputLastname}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="phone"
                                    label="Phone No*"
                                    name="phone"
                                    autoComplete="tel"
                                    value={phone}
                                    onChange={inputPhone}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="email"
                                    name="email"
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    label="Email*"
                                    autoFocus
                                    value={email}
                                    onChange={inputEmail}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="password"
                                    autoComplete="password"
                                    name="password"
                                    variant="outlined"
                                    fullWidth
                                    id="password"
                                    label="Password*"
                                    autoFocus
                                    value={password}
                                    onChange={inputPassword}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="password"
                                    autoComplete="password"
                                    variant="outlined"
                                    fullWidth
                                    id="confirmpassword"
                                    label="Confirm Password*"
                                    name="confirmpassword"
                                    value={confirmPassword}
                                    onChange={inputConfirmPassword}
                                />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                sm={12}
                                className={classes.description}
                            >
                                <TextField
                                    autoComplete="text"
                                    variant="outlined"
                                    fullWidth
                                    id="Description"
                                    label="description"
                                    name="description"
                                    value={description}
                                    onChange={inputDescription}
                                />
                            </Grid>
                        </Grid>
                        <Grid container className={classes.buttonContainer}>
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => dispatch(signUp(firstname, lastname,  email, password, confirmPassword, description, phone))}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    type="cancel"
                                    variant="outlined"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    {/* </form> */}
                    </div>
                    
                </div>
            </Grid>
        </Grid>
    );
}
