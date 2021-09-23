import React, {useState, useCallback, useEffect} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SetSerialNoArea from "./setSerialArea";
import { updateInventory, deleteInventory } from "../../actions/action";
import taskstechApi from '../../api/taskstechApi';
import { useDispatch } from "react-redux";
import { push } from 'connected-react-router';


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
      margin: theme.spacing(2, 2),
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

export default function InventoryDetail() {
  const [name, setName] = useState(""),
            [description, setDescription] = useState(""),
            [quantity, setQuantity] = useState(""),
            [supplier, setSupplier] = useState(""),
            [price, setPrice] = useState(""),
            [notes, setNotes] = useState(""),
            [model_no, setModel_no] = useState(""),
            [serialNos, setSerialNos] = useState([]),
            [prevSerialNos, setPrevSerialNos] = useState([]);

    let iid = window.location.pathname.split('/inventory/details')[1];
    if(iid !== ""){
        iid = iid.split('/')[1];
    }

  const classes = useStyles();
  const dispatch = useDispatch();

  const inputName = useCallback(
    (event) => {
        setName(event.target.value);
    },
    [setName]
);
    const inputDescription = useCallback(
    (event) => {
        setDescription(event.target.value);
    },
    [setDescription]
    );
    const inputQuantity = useCallback(
        (event) => {
            setQuantity(event.target.value);
        },
        [setQuantity]
        );
    const inputSupplier = useCallback(
    (event) => {
        setSupplier(event.target.value);
    },
    [setSupplier]
    );
    const inputPrice = useCallback(
    (event) => {
        setPrice(event.target.value);
    },
    [setPrice]
    );
    const inputNotes = useCallback(
    (event) => {
        setNotes(event.target.value);
    },
    [setNotes]
    );
    const inputModel_no = useCallback(
    (event) => {
        setModel_no(event.target.value);
    },
    [setModel_no]
    );
    useEffect(()=>{
        console.log(serialNos)
    },[serialNos])

    
    useEffect(async () => {
        if(iid !==""){
            const token = localStorage.getItem('token');
        try {
            taskstechApi.get(`/inventory/${iid}`, {
                headers: { authorization: `Bearer ${token}` }
            })
                .then(res => {
                    console.log(res)
                    setName(res.data.name)
                    setDescription(res.data.description)
                    setQuantity(res.data.inventory_details.length)
                    setSupplier(res.data.supplier)
                    setModel_no(res.data.model_no)
                    setPrice(res.data.price)
                    setNotes(res.data.notes)
                    setSerialNos(res.data.inventory_details)
                    setPrevSerialNos(res.data.inventory_details)
                })
        } catch (error) {
            console.log(error.message)
        }
        }
        }, [])


//   let inventoryData = {
//       name:name,
//       description:description,
//       supplier:supplier,
//       price:price,
//       notes:notes,
//       model_no:model_no,
//       inventory_details:serialNos
//   }



  const handleUpdate= () => {
    if (name === "" || price === "" ){
        alert ("Please fill in the form.")
        return false
    }
    let inventoryData = {
        name:name,
         description:description,
         supplier:supplier,
        price:price,
        notes:notes,
        model_no:model_no,
        inventory_details:serialNos
    }
    dispatch(updateInventory(inventoryData, iid))
  }
  
  const handleDelete = () => {
      dispatch(deleteInventory(iid));
      dispatch(push('/inventory/list'))
      alert ("Delete Item Successfully!");

  }


  return (
    <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={2} md={2}>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={8}
                component={Paper}
                elevation={6}
                square={false}
            >
                <div className={classes.header}>
                    <h3>Inventory Details</h3>
                </div>
                <div className={classes.paper}>
                    <div
                        className={classes.form}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="name"
                                    label="Inventory Name"
                                    name="name"
                                    autoComplete="name"
                                    value={name}
                                    onChange={inputName}
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
                                    value={description}
                                    onChange={inputDescription}
                                />
                            </Grid>
                            <Grid item xs={8} sm={4}>
                                <TextField
                                    autoComplete="description"
                                    name="quantity"
                                    variant="outlined"
                                    fullWidth
                                    id="quantity"
                                    label="Quantity"
                                    value={quantity}
                                    type="number"
                                    onChange={inputQuantity}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Button 
                                    variant="outlined"
                                    color="primary"
                                    onClick={()=>setQuantity("")}>
                                    Reset
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="supplier"
                                    name="supplier"
                                    variant="outlined"
                                    fullWidth
                                    id="supplier"
                                    label="Supplier"
                                    value={supplier}
                                    onChange={inputSupplier}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="model_no"
                                    label="Model No"
                                    name="model_no"
                                    value={model_no}
                                    onChange={inputModel_no}
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
                                    value={price}
                                    type="number"
                                    onChange={inputPrice}
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
                                    value={notes}
                                    onChange={inputNotes}
                                    rows={5}
                                    multiline={true}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                            >
                              <SetSerialNoArea serialNos={serialNos} setSerialNos={setSerialNos} quantity={quantity} prevSerialNos={prevSerialNos} iid={iid}/>
                                
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
                                    ASSIGN TO JOB
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => handleUpdate()}

                                >
                                    UPDATE
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    color="secondary"
                                    className={classes.submit}
                                    // onClick={deleteInventory(iid)}
                                    onClick={()=>handleDelete()}
                                >
                                    DELETE
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

    
