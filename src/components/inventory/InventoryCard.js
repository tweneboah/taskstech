import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import {push} from 'connected-react-router';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:400,
    margin:'0 auto',
    marginBottom:20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
});

export default function InventoryCard(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent onClick={()=> dispatch(push('/detail/inventory/' + props.id))}>
        <Typography variant="h5" component="h2">
            {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Stock Qty: {props.quantity}
        </Typography>
      </CardContent>
    </Card>
  );
}