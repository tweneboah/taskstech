import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DataTable from './DataTable';
import Box from '@material-ui/core/Box';

import SimpleBackdrop from '../../Loading/SimpleBackdrop';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../../actions/action';
import JobDiary from '../JobDiary/JobDiary';
import * as History from 'history';
export const history = History.createBrowserHistory();

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="span" variant="h6">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: `55rem`,
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [params, setParams] = useState({});
    const { job } = useSelector((state) => state);

    const dispatch = useDispatch();

    const callback = ({ cellValues, isClicked, history }) => {
        setIsClicked(isClicked);
        setParams(cellValues)
        history.push("/view/jobs/diary");
    };
    
    const completedJobs = {
        payload: job.payload.filter(job => {
            return job.job_status.name === 'Completed';
        })
    };


    const activeJobs = {
        payload: job.payload.filter(job => {
            return job.job_status.name === 'In progress';
        })
    };

    
    useEffect(() => {
        dispatch(getAllJobs(job?.loading));
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const renderDataTable = () => {
        return isClicked === true
            ? (
                <JobDiary rows={params} />
            )
            : (
                <React.Fragment>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="All Jobs" {...a11yProps(0)} />
                            <Tab label="Completed Jobs" {...a11yProps(1)} />
                            <Tab label="Active Jobs" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction} >
                            <DataTable 
                                jobs={job} 
                                title='All Jobs' 
                                parentCallback={callback} 
                            />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <DataTable
                                jobs={completedJobs}
                                title='Completed Jobs'
                                parentCallback={callback} 
                            /> 
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <DataTable
                                jobs={activeJobs}
                                title='Active Jobs'
                                parentCallback={callback} 
                            />  
                        </TabPanel>
                    </SwipeableViews>
                </React.Fragment>
            );
    };

    return (
        <Container maxWidth="lg" className={classes.root}>
            {renderDataTable()}
            <SimpleBackdrop loading={job.loading} />
        </Container>
    );
}
