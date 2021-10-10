import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux'; //

import { useFormControl } from '../../../common/useFormControl';
import SimpleBackdrop from '../../Loading/SimpleBackdrop';
import { getStatus } from '../../../actions/action'; //, createJob

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const CreateJob = () => {
    //const [inventoryId, setInventory] = useState([]);
    
    
    const status = useSelector((state) => state.status.job);
    const indicator = useSelector((state) => state.job.loading);
    const matches = useMediaQuery('(max-width:600px)');
    const dispatch = useDispatch();
    const { 
        handleUserInput, 
        handleDropdownChange, 
        handleSubmit, 
        jobStatus, 
        errors, 
        formIsValid 
    } = useFormControl();
    

    //console.log(formIsValid())
    
    useEffect(() => {
        dispatch(getStatus());
    }, [indicator]);
    
    

    return (
        <Box
            sx={{
                '& .MuiTextField-root': { 
                    m: 1, 
                    width: matches === false 
                        ? '35vw' 
                        : '70vw !important' 
                },
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
                            error={!formIsValid()} 
                            helperText={ errors.helperText }
                            name='jobName'
                            required
                            id="outlined-error-helper-text"
                            label="Job Name"
                            variant="outlined"
                            onBlur={handleUserInput} 
                            onChange={handleUserInput}
                        />
                    </div>
                    <div>
                        <TextField
                            error={!formIsValid()}
                            helperText={ errors.helperText }
                            name='description'
                            id="outlined-error-helper-text"
                            label="Description"
                            variant="outlined"
                            onBlur={handleUserInput}
                            onChange={handleUserInput}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-select-currency-native"
                            select
                            name='job_status_id'
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
                            error={false}
                            name='tradesperson_id'
                            required
                            id="outlined-error-helper-text"
                            label="Tradesperson Id"
                            variant="outlined"
                            onChange={handleUserInput}
                        />
                    </div>
                    <div>
                        <TextField
                            error={false}
                            required
                            name='customer_id'
                            //type="number"
                            id="outlined-error-helper-text"
                            label="Customer Id"
                            variant="outlined"
                            onChange={handleUserInput}
                        />
                    </div>
                </Item>
                <Item>
                    <div>
                        <Button
                            disabled={!formIsValid()}
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