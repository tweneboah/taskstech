import React, {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux'
import { fetchInventory } from '../../actions/action'
import { getInventory } from '../../selector/inventorySelector'
// import {push} from 'connected-react-router';






// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataGridDemo() {

    const dispatch = useDispatch()
    const selector = useSelector(state => state);
    const items = getInventory(selector)

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Item Name',
          width: 150,
          
        },
        {
          field: 'quantity',
          headerName: 'Quantity',
        //   type: 'number',
          width: 130,
        },
        {
          field: 'model_no',
          headerName: 'Model',
          width: 130,
        },
    
      ];
    

    useEffect(() => {
        dispatch(fetchInventory())
    },[])

  return (
    <div style={{ height: 400, width: '90%' }}>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
}
