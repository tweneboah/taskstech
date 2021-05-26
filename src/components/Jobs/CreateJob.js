import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './jobs.css';
import FormNav from '../Navigation/FormNav';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '25vh',
    marginBottom: '15%',
    marginTop: '15%'
  },
  job: {
    margin: 12
  },
  content: {
    display: 'flex',
    marginTop: 12,
    marginLeft: 20,
    textAlign: 'left'
  }
});



const CreateJob = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormNav />
      <div className={classes.job}>
        <Typography gutterBottom variant="h5" component="h2">
          Create New Job
        </Typography>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                STEP 1/3 - CUSTOMER
              </Typography>
              <Typography className={classes.content} variant="body2" color="textSecondary" component="h2">
                EXISTING CUSTOMER?
            </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" color="primary">
              <a href="#">Yes</a>
            </Button>
            <Button size="small" color="primary">
              <a href="#">No</a>
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className={classes.job}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                STEP 2/3 - JOB ASSETS
              </Typography>
              <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                ASSIGN JOB ASSETS.
                DO YOU WANT TO CREATE A NEW INVENTORY?
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" color="primary">
              <a href="#">Yes</a>
            </Button>
            <Button size="small" color="primary">
              <a href="#">No</a>
            </Button>
          </CardActions>

        </Card>
      </div>

      <div className={classes.job}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                STEP 3/3 - CREATE NEW JOB
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </div>
    </React.Fragment>
  );

}

export default CreateJob;

