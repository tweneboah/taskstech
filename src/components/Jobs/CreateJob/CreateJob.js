import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import SimpleBackdrop from '../../Loading/SimpleBackdrop';

import { getStatus, createJob } from '../../../actions/action';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const CreateJob = () => {
    const [throwError, setThrowError] = useState(false);
    const [jobName, setJobName] = useState('');
    const [description, setDescription] = useState('');
    const [tradespersonId, setTradespersonId] = useState(0);
    const [customerId, setCustomerId] = useState(0);
    //const [inventoryId, setInventory] = useState([]);
    const [jobStatus, setJobStatus] = useState('Not yet started');
    const [jobStatusId, setJobStatusId] = useState(1);

    const status = useSelector((state) => state.status.job);
    const indicator = useSelector((state) => state.job.loading);
    useSelector((state) => console.log(state.job));
    const matches = useMediaQuery('(max-width:600px)');
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        handleFields();
        if (throwError === false) {
            dispatch(createJob(jobObject, true));
        }
    };

    const handleFields = () => {
        if (jobName === "" && description === "" && tradespersonId === "" && customerId === "") {
            setThrowError(true);
        } else {
            setThrowError(false);
        }
    };

    let jobObject = {
        name: jobName,
        description: description,
        job_status_id: jobStatusId,
        tradesperson_id: tradespersonId,
        customer_id: customerId
    }

    useEffect(() => {
        dispatch(getStatus());
    }, [indicator]);

    const handleDropdownChange = event => {
        event.preventDefault();
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index]
        const option = el.getAttribute('id');

        setJobStatus(event.target.value)
        setJobStatusId(option)
    };

    return (
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: matches === false ? '35vw' : '70vw !important' },
            }}
        >
            {/* <FormNav /> */}
            <Paper
                elevation={3}
                component="form"
                sx={{
                    width: matches === false ? '40vw' : '80vw',
                    margin: '0 auto',
                    padding: '10px'
                }}
                onSubmit={handleSubmit}
            >
                <Item>
                    <Typography component="div" variant="h4">
                        Create New Job
                    </Typography>
                    <Typography sx={{ margin: '0' }} gutterBottom variant="span">
                        Please fill the job details
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        *Required
                    </Typography>
                </Item>
                <Item>
                    <div>
                        <TextField
                            error={throwError}
                            required
                            id="outlined-error-helper-text"
                            label="Job Name"
                            variant="outlined"
                            onChange={e => setJobName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            error={throwError}
                            id="outlined-error-helper-text"
                            label="Description"
                            variant="outlined"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
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
                    </div>
                    <div>
                        <TextField
                            error={throwError}
                            required
                            id="outlined-error-helper-text"
                            label="Tradesperson Id"
                            variant="outlined"
                            onChange={e => setTradespersonId(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            error={throwError}
                            required
                            id="outlined-error-helper-text"
                            label="Customer Id"
                            variant="outlined"
                            onChange={e => setCustomerId(e.target.value)}
                        />
                    </div>
                </Item>
                <Item>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Create
                        </Button>
                    </div>
                </Item>
            </Paper>

            <SimpleBackdrop loading={indicator} /> {/**/}
        </Box >
    );
}

export default CreateJob;