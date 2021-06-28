import React, { useState } from "react";
import { Link as RouterLink, useParams, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import  FormHelperText  from "@material-ui/core/FormHelperText";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Copyright from "../../components/copyright/Copyright";
import { validateInput, checkIsFormValid } from "../../utils/formUtils";

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
  password: {
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

const ResetPassword = () => {
  const [formState, setFormState] = useState(initialState)
  const [message, setMessage] = useState(initialMsgState)
  const [isLoading, setIsLoading] = useState(false)

  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();


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
        detailMsg: "please enter a new password"
      }
      setMessage(newMsgState)
      setTimeout(() => {
        setMessage(initialMsgState);
      }, 5000);
    } else {
      setIsLoading(true);

      const apiUrl = "https://taskstech2.pythonanywhere.com/api/v1/forgot_password"
      
      const payload = {
        password: formState.password.value,
      }

      try {
        const response = await axios.post(`${apiUrl}/${id}`, payload);
        console.log(response.status)
        const newMsgState = {
          show: true,
          detailMsg: "Successfully set the new password"
        }
        setFormState(initialState);
        setMessage(newMsgState);
        setIsLoading(false);
        setTimeout(() => {
          setMessage(initialMsgState);
        }, 5000);
        history.push("/");
      }
      catch (error) {
        console.log("error msg is " + error.message)
        const newMsgState = {
          show: true,
          detailMsg: "The link is expired"
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Set a new password
        </Typography>
        {message.show && <FormHelperText>{message.detailMsg}</FormHelperText>}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="password"
            name="password"
            autoComplete="password"
            autoFocus
            onChange={handleChange}
            onBlur={handleOnBlur}
            error={formState.password.touched && formState.password.hasError}
            helperText={formState.password.error}
          />

          {isLoading ? <CircularProgress /> : <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Update
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

export default ResetPassword;