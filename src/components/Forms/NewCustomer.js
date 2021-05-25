import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import FormNav from '../Navigation/FormNav';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '90vw',
        },
    },
}));

const states = [
    {
        value: 'Select State',
        label: 'Select a State',
    },
    {
        value: 'New South Wales',
        label: 'NSW',
    },
    {
        value: 'Queensland',
        label: 'QLD',
    },
    {
        value: 'South Australia',
        label: 'SA',
    },
    {
        value: 'Tasmania',
        label: 'TAS',
    },
    {
        value: 'Victoria',
        label: 'VIC',
    },
    {
        value: 'Western Australia',
        label: 'WA',
    },
];


export const NewCustomer = () => {
    const classes = useStyles();
    const [state, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };


    return (
        <React.Fragment>
            <FormNav />
            <div id='content-heading'>
                <Typography gutterBottom variant="h5">
                    Create New Customer
                </Typography>
                <Typography gutterBottom variant="span">
                    Please fill the customer details
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                *Required
                </Typography>
                
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <div id='fields'>
                    <TextField
                        /* error */
                        required
                        id="outlined-error-helper-text"
                        label="First Name"
                        variant="outlined"
                    />
                    <TextField
                        /*error*/
                        required
                        id="outlined-error-helper-text"
                        label="Last Name"
                        variant="outlined"
                    />
                    <TextField
                        /*error*/
                        id="outlined-error-helper-text"
                        label="Company"
                        variant="outlined"
                    />
                    <TextField
                        /*error*/
                        required
                        id="outlined-error-helper-text"
                        label="Contact No"
                        variant="outlined"
                        type='number'
                    />
                    <TextField
                        /*error*/
                        required
                        id="outlined-error-helper-text"
                        label="Email"
                        variant="outlined"
                    />
                    <TextField
                        /*error*/
                        id="outlined-error-helper-text"
                        label="Address"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="State"
                        value={state}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your currency"
                        variant="outlined"
                    >
                        {states.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        /*error*/
                        id="outlined-error-helper-text"
                        type='number'
                        label="Postcode"
                        variant="outlined"
                    />
                </div>
                <div id='buttons'>
                    <Button variant="contained" color="primary">
                        Create
                    </Button>
                </div>
            </form>
        </React.Fragment>
    );
}
