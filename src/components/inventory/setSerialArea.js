import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, IconButton,  makeStyles } from '@material-ui/core'
import { CheckCircle, Delete, Edit} from '@material-ui/icons'
import React, {useState, useCallback, useEffect} from 'react'
import  TextInput  from './TextInput'
import taskstechApi from '../../api/taskstechApi';
// import { useDispatch } from "react-redux";
// import { push } from 'connected-react-router';



const useStyles = makeStyles({
    checkIcon:{
        float:'right'
    },
    iconCell:{
        height:48,
        width:48
    }
})

const SetSerialNoArea = (props) => {
    const classes = useStyles();
    const [index, setIndex] = useState(0)
     const [serialNo, setSerialNo] = useState("");

    // const dispatch = useDispatch();


    const inputSerialNo = useCallback((event) => {
        setSerialNo(event.target.value)
    },[setSerialNo])

    const addSerialNo = (serialNo) => {
        if (index === props.serialNos.length) {
            props.setSerialNos(prevState => [...prevState, {serial_no:serialNo}])
            setIndex(index + 1)
            setSerialNo("")
        } else {
            const newSerialNos = props.serialNos
            newSerialNos[index] = {serial_no:serialNo}
            props.setSerialNos(newSerialNos)
            setIndex(newSerialNos.length)
            setSerialNo("")
        }
    };

    const editSerialNo = (index, serialNo) => {
        setIndex(index);
        setSerialNo(serialNo);
    }

    const deleteSerialNo = async (deleteIndex) => {
        let diid = props.prevSerialNos[deleteIndex].id
        const token = localStorage.getItem('token');
        try {
            await taskstechApi.delete(`/inventory_details/${diid}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(res => {
                    console.log(res)
                })
        } catch (error) {
            console.log(error.message)
        }
        // const newSerialNos = props.serialNos.filter((item, i) => i !== deleteIndex);
        // props.setSerialNos(newSerialNos)
        // dispatch(push('/inventory/details/' + props.iid))
        window.location.reload(false)
    }

    useEffect(()=>{
        setIndex(props.serialNos.length)
    },[props.serialNos])

    // useEffect(()=>{
    //     console.log(index)
    // },[props.setQuantity])
    useEffect(()=>{
        props.setSerialNos([])
        setIndex(0)
        handleSerialNo();
    },[props.quantity])


    const handleSerialNo = () => {
        for (let i=0; i < props.quantity; i++){
            addSerialNo((i+1).toString());
        }
    }
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Serial No</TableCell>
                            <TableCell className={classes.iconCell} />
                            <TableCell className={classes.iconCell} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.serialNos.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell>{item.serial_no}</TableCell>
                                    <TableCell>
                                        <IconButton className={classes.iconCell} onClick={()=> editSerialNo(i, item.serial_no)}>
                                            <Edit />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton className={classes.iconCell} onClick={() => deleteSerialNo(i)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <div>
                    <TextInput
                        fullWidth={true} label={"SerialNo"} multiline={false} required={false}
                        onChange={inputSerialNo} value={serialNo} type={"text"} row={1}
                        variant={"outlined"}
                    />
                </div>
                <IconButton className={classes.checkIcon} onClick={() => addSerialNo(serialNo)}>
                    <CheckCircle />
                </IconButton>
            </TableContainer>
        </div>
    )
}

export default SetSerialNoArea
