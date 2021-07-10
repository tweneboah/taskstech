import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import FormNav from '../Navigation/FormNav';
import { getStatus, createJob } from '../../actions/action';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '80vw',
        },
    },
}));


const CreateJob = () => {
    const classes = useStyles();
    const [jobName, setJobName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [tradespersonId, setTradespersonId] = React.useState(0);
    const [customerId, setCustomerId] = React.useState(0);
    const [jobStatus, setJobStatus] = React.useState('');
    const [jobStatusId, setJobStatusId] = React.useState('');

    const status = useSelector((state) => state.status);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
    };

    let jobObject = {
        name: jobName,
        description: description,
        job_status_id: jobStatusId,
        tradesperson_id: tradespersonId,
        customer_id: customerId
    }

    useEffect(() => {
        dispatch(getStatus())
    }, []);

    const handleDropdownChange = event => {
        event.preventDefault();
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index]
        const option = el.getAttribute('id');

        setJobStatus(event.target.value)
        setJobStatusId(option)
    };


    return (
        <React.Fragment>
            <FormNav />
            <div id='content-heading'>
                <Typography gutterBottom variant="h5">
                    Create New Job
                </Typography>
                <Typography gutterBottom variant="span">
                    Please fill the job details
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    *Required
                </Typography>

            </div>
            <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                <div id='fields'>
                    <TextField
                        /* error */
                        required
                        id="outlined-error-helper-text"
                        label="Job Name"
                        variant="outlined"
                        onChange={e => setJobName(e.target.value)}
                    />
                    <TextField
                        /*error*/
                        id="outlined-error-helper-text"
                        label="Description"
                        variant="outlined"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-select-currency-native"
                        select
                        value={jobStatus}
                        onChange={handleDropdownChange}
                        SelectProps={{
                            native: true,
                        }}
                        variant="outlined"
                    >
                        {status.map((option, key) => (
                            <option key={key} value={option.name} id={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </TextField>

                    <TextField
                        /*error*/
                        required
                        id="outlined-error-helper-text"
                        label="Tradesperson Id"
                        variant="outlined"
                        onChange={e => setTradespersonId(e.target.value)}
                    />

                    <TextField
                        /*error*/
                        required
                        id="outlined-error-helper-text"
                        label="Customer Id"
                        variant="outlined"
                        onChange={e => setCustomerId(e.target.value)}
                    />
                </div>
                <div id='buttons'>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(createJob(jobObject))}
                    >
                        Create
                    </Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default CreateJob;