import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, IconButton,  makeStyles } from '@material-ui/core'
import { CheckCircle, Delete, Edit} from '@material-ui/icons'
import React, {useState, useCallback, useEffect} from 'react'
import  TextInput  from './TextInput'

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
    const [index, setIndex] = useState("")
     const [serialNo, setSerialNo] = useState("");

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

    useEffect(()=> {
        const length = props.quantity
        for (let i=length; i > 0; i--){
            addSerialNo(index, 0)
        }
    },[props.quantity])

    const editSerialNo = (index, serialNo) => {
        setIndex(index);
        setSerialNo(serialNo);
    }

    const deleteSerialNo = (deleteIndex) => {
        const newSerialNos = props.serialNos.filter((item, i) => i !== deleteIndex);
        props.setSerialNos(newSerialNos)
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
                                        <IconButton className={classes.iconCell} onClick={()=> editSerialNo(i, item.quantity)}>
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
                        fullWidth={true} label={"SerialNo"} multiline={false} required={true}
                        onChange={inputSerialNo} value={serialNo} type={"text"} row={1}
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
