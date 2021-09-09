import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { makeStyles } from '@material-ui/core/styles';

import './viewjobs.css';
/**/
const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
};

const renderReactElement = params => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={(event) => {
        handleClick(event, params);
      }}
    >
      <MenuBookIcon />
    </Button>
  );
}

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 170,
    editable: true,
  },
  {
    field: 'job_status',
    headerName: 'Status',
    width: 130,
    editable: false,
    valueGetter: (params) => {
      return params.row.job_status.name;
    }
  },
  {
    field: 'diary',
    headerName: 'View Diary',
    sortable: false,
    width: 120,
    renderCell: renderReactElement
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));


export default function DataTable(props) {
  const { jobs } = props;

  const classes = useStyles();
  const rows = jobs.payload;

  return (
    <div
      className={classes.root}
      style={{ height: 400, width: '100%' }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

