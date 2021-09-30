import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory } from "../../actions/action";
import { getInventory } from "../../selector/inventorySelector";
// import {push} from 'connected-react-router';


export default function InventoryList() {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const items = getInventory(selector);


    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "name",
            headerName: "Item Name",
            width: 150,
        },
        {
            field: "quantity",
            headerName: "Quantity",
            //   type: 'number',
            width: 130,
        },
        {
            field: "supplier",
            headerName: "Supplier",
            width: 130,
        },
    ];

    useEffect(() => {
        dispatch(fetchInventory());
    }, []);

    return (
        <div style={{ height: 400, width: "90%", margin:"auto"}}>
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
