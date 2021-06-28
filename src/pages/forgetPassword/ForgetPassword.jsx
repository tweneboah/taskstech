import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Copyright from "../../components/copyright/Copyright";
import { validateInput, checkIsFormValid } from "../../utils/formUtils";
import { FormHelperText } from "@material-ui/core";
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const initialState = {
  email: {
    value: "",
    touched: false,
    hasError: true,
    error: ""
  },
  isFormValid: false,
}

const initialMsgState = {
  show: false,
  detailMsg: ""
}

const ForgetPassword = () => {
  const [formState, setFormState] = useState(initialState)
  const [message, setMessage] = useState(initialMsgState)
  const [isLoading, setIsLoading] = useState(false)

  const classes = useStyles();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const { hasError, error } = validateInput(name, value);
    const isFormValid = checkIsFormValid(name, value, hasError, error, formState);
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        hasError,
        error,
        touched: false,
      },
      isFormValid,
    }));
  };

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    const { hasError, error } = validateInput(name, value);
    const isFormValid = checkIsFormValid(name, value, hasError, error, formState);
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        hasError,
        error,
        touched: true,
      },
      isFormValid,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    // validate the formstate
    const tempFormState = {};
    let isFormValid = true;

    for (const name in formState) {
      const { value } = formState[name];
      const { hasError, error } = validateInput(name, value);

      if (hasError) {
        isFormValid = false;
      }

      if (name) {
        tempFormState[name] = {
          value,
          hasError,
          error,
          touched: true,
        };
      }
    }

    setFormState({
      ...tempFormState,
      isFormValid,
    })

    if (!isFormValid) {
      const newMsgState = {
        show: true,
        detailMsg: "please enter a valid email address"
      }
      setMessage(newMsgState)
      setTimeout(() => {
        setMessage(initialMsgState);
      }, 5000);
    } else {
      setIsLoading(true);
      const baseUrl = "https://taskstech2.pythonanywhere.com/api/v1/forgot_password/"
      try {
        const response = await axios.post(`${baseUrl}/${formState.email.value}`);
        console.log(response.status)
        const newMsgState = {
          show: true,
          detailMsg: "Successfully sent request of resetting password link"
        }
        setFormState(initialState);
        setMessage(newMsgState);
        setIsLoading(false);
        setTimeout(() => {
          setMessage(initialMsgState);
        }, 5000);
      }
      catch (error) {
        console.log("error msg is " + error.message)
        const newMsgState = {
          show: true,
          detailMsg: "The email doesn't exist"
        }
        setFormState(initialState)
        setMessage(newMsgState)
        setIsLoading(false)
        setTimeout(() => {
          setMessage(initialMsgState);
        }, 5000);
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalConvenienceStoreOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forget password
        </Typography>
        {message.show && <FormHelperText>{message.detailMsg}</FormHelperText>}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            onBlur={handleOnBlur}
            error={formState.email.touched && formState.email.hasError}
            helperText={formState.email.error}
          />

          {isLoading ? <CircularProgress /> : <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Send Link
          </Button>}
          <Grid container>
            <Link component={RouterLink} to="/" variant="body2">
              {"Back to Sign In"}
            </Link>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default ForgetPassword;