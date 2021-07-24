import React  from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useForm from './useForm';
import validate from './validateInfo'
// import getTokens from "../helper/getToken"



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
  
  export default function TradieProfileForm() {
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
                <h3>Tradie Details</h3>
                <h4>Tradie ID: 12345677</h4>
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
                  autoComplete="phone"
                  name="phone"
                  variant="outlined"
                  fullWidth
                  id="phone"
                  label="Phone No"
                  autoFocus
                  value={values.phone}
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
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="passwordl"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
  
                />
                {errors.password && <p className="errormessage">{errors.password}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="role"
                name="role"
                variant="outlined"
                fullWidth
                id="role"
                label="Role"
                autoFocus
                value={values.role}
                onChange={handleChange}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl} fullWidth>
                    <InputLabel shrink id="state">
                    Categories*
                    </InputLabel>
                    <Select
                    name="categories"
                    variant="outlined"
                    label="categories"
                    id="categories"
                    value={values.categories}
                    className={classes.select}
                    onChange={handleChange}
                error={errors.categories}

                    >
                    <MenuItem value={"electrical"}>Electrical</MenuItem>
                    <MenuItem value={""}>Installer</MenuItem>
                    <MenuItem value={""}></MenuItem>

                    </Select>
                    {/* <FormHelperText>Label + placeholder</FormHelperText> */}
                </FormControl>
                {errors.categories && <p className="errormessage">{errors.categories}</p>}
            </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="LicenceNo"
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Licence No"
                  name="LicenceNo"
                  value={values.LicenceNo}
                  onChange={handleChange}
                  error={errors.LicenceNo}
  
                />
                {errors.LicenceNo && <p className="errormessage">{errors.LicenceNo}</p>}
              </Grid>
              <Grid item xs={12} sm={12} className={classes.description}>
              <TextField
                autoComplete="text"
                variant="outlined"
                fullWidth
                id="Description"
                label="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                rows={5}
                multiline={true}

              />
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