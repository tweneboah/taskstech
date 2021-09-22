import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';

import JobDiaryDataTable from '../JobDiary/JobDiaryDataTable';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 600,
  },
  diary: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    
  },
}));

export default function JobDiary({ rows }) {
  const classes = useStyles();
  //console.log(history)


  return (
    <Container maxWidth="lg" className={classes.root}>
      <div >
        <Typography component="h1" variant="h5" className={classes.diary}>
          Job Diary
        </Typography>

        <JobDiaryDataTable diary={rows} /> {/**/}
      </div>

    </Container>
  );
}
