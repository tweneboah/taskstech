import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useForm from './useForm';
import validate from './validateInfo'


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginTop:'2rem',
        marginLeft:'2rem',


    },
    paper: {
      margin: theme.spacing(2, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonContainer:{
        display: 'flex',
        flexDirection: 'row-reverse',
        paddingTop: '5vh',
    },
  
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(5),
    },
    submit: {
      margin: theme.spacing(3, 2, 3, 6),
    },
  }));
  
  export default function CreateNewCustomer() {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
    const classes = useStyles();

  
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={2} md={2}>
            Left Side Bar
        </Grid>
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
            <div className={classes.header}>
                <h3>Customer Details</h3>
                <h4>Customer ID: 12345677</h4>
            </div>
          <div className={classes.paper}>
            <form className={classes.form}  onSubmit={handleSubmit}>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                {errors.firstName && <p className="errormessage">{errors.firstName}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="name"
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                {errors.lastName && <p className="errormessage">{errors.lastName}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="organization"
                  name="company"
                  variant="outlined"
                  fullWidth
                  id="company"
                  label="Company"
                  autoFocus
                  value={values.company}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
  
                />
                {errors.email && <p className="errormessage">{errors.email}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                  variant="outlined"
                  fullWidth
                  id="phone"
                  label="Phone No"
                  name="phone"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
  
                />
                {errors.phone && <p className="errormessage">{errors.phone}</p>}
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="address"
                  name="address"
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"
                  autoFocus
                  value={values.address}
                  onChange={handleChange}
                  error={errors.address}
  
                />
                {errors.address && <p className="errormessage">{errors.address}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl} fullWidth>
                      <InputLabel shrink id="state">
                      State
                      </InputLabel>
                      <Select
                      name="state"
                      variant="outlined"
                      label="state"
                      id="state"
                      value={values.state}
                      className={classes.select}
                      onChange={handleChange}
                  error={errors.state}
  
                      >
                      <MenuItem value={"ACT"}>ACT</MenuItem>
                      <MenuItem value={"NSW"}>NSW</MenuItem>
                      <MenuItem value={"NT"}>NT</MenuItem>
                      <MenuItem value={"QLD"}>QLD</MenuItem>
                      <MenuItem value={"SA"}>SA</MenuItem>
                      <MenuItem value={"TAS"}>TAS</MenuItem>
  
                      </Select>
                      {/* <FormHelperText>Label + placeholder</FormHelperText> */}
                  </FormControl>
                  {errors.state && <p className="errormessage">{errors.state}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="postcode"
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Postcode"
                  name="postcode"
                  autoComplete="postcode"
                  value={values.postcode}
                  onChange={handleChange}
                  error={errors.postcode}
  
                />
                {errors.postcode && <p className="errormessage">{errors.postcode}</p>}
              </Grid>
              

            </Grid >
            <Grid container className={classes.buttonContainer}>
                <Grid item xs ={4}>
                  <Button 
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  >
                  CONFIRM
                  </Button>
                </Grid>
                <Grid item xs ={4}>
                  <Button 
                  type="submit"
                  variant="outlined"
                  color="primary"
                  className={classes.submit}
                  >
                  Cancel
                  </Button>
                </Grid>
  
  
            </Grid>
              
  
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={2} md={2}>
            right sidebar
        </Grid>        
      </Grid>
    );
  }