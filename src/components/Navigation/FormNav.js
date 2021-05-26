import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './navigation.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const FormNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>


        <Grid item xs={6}>
          <div className='form-nav left'>
            <a className={classes.paper}>Back</a>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className='form-nav right'>
            <a className={classes.paper}>X</a>
          </div>
        </Grid>
      </Grid>
    </div>
  );

}

export default FormNav;