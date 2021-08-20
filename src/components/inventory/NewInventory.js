import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SetSerialNoArea from "./setSerialArea";


const useStyles = makeStyles((theme) => ({
  root: {
      height: "100vh",
  },
  header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      marginTop: "2rem",
      marginLeft: "2rem",
  },
  paper: {
      margin: theme.spacing(2, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
  },
  buttonContainer: {
      display: "flex",
      flexDirection: "row-reverse",
      paddingTop: "5vh",
  },

  form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(5),
  },
  submit: {
      margin: theme.spacing(3, 2, 3, 6),
  },
}));

function NewInventory() {
  const [serialNos, setSerialNos] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    console.log(serialNos)
  }, [serialNos])
  return (
    <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={2} md={2}>
            </Grid>
            <Grid
                item
                xs={12}
                sm={8}
                md={8}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.header}>
                    <h3>Create New Inventory</h3>
                    <h4>Please fill the inventory details</h4>
                    <span>*Required</span>
                </div>
                <div className={classes.paper}>
                    <div
                        className={classes.form}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="name"
                                    name="inventoryId"
                                    variant="outlined"
                                    fullWidth
                                    id="inventoryId"
                                    label="Inventory ID"
                                    autoFocus
                                    // value={}
                                    // onChange={}
                                    disabled={true}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="name"
                                    label="Inventory Name"
                                    name="name"
                                    autoComplete="name"
                                    // value={}
                                    // onChange={}
                                />
                                
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="description"
                                    name="description"
                                    variant="outlined"
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    // value={}
                                    // onChange={}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}></Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="supplier"
                                    name="supplier"
                                    variant="outlined"
                                    fullWidth
                                    id="supplier"
                                    label="Supplier"
                                    // value={}
                                    // onChange={}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="model_no"
                                    label="Model No"
                                    name="model_no"
                                    // value={}
                                    // onChange={}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="price"
                                    name="price"
                                    variant="outlined"
                                    fullWidth
                                    id="price"
                                    label="Price"
                                    // value={}
                                    // onChange={}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                className={classes.notes}
                            >
                                <TextField
                                    autoComplete="text"
                                    variant="outlined"
                                    fullWidth
                                    id="notes"
                                    label="Notes"
                                    name="notes"
                                    // value={}
                                    // onChange={}
                                    rows={5}
                                    multiline={true}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                className={classes.notes}
                            >
                              <SetSerialNoArea serialNos={serialNos} setSerialNos={setSerialNos}/>
                                
                            </Grid>
                        </Grid>
                        <Grid container className={classes.buttonContainer}>
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    CONFIRM
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    type="cancel"
                                    variant="outlined"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
            <Grid item xs={false} sm={2} md={2}>
            </Grid>
        </Grid>
  );
}

export default NewInventory;
