import React, {useEffect} from 'react'
import InventoryCard from './InventoryCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInventory } from '../../actions/action'
import { getInventory } from '../../selector/inventorySelector'



const InventoryList = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state);
    const items = getInventory(selector)
    


    useEffect(() => {
        dispatch(fetchInventory())
    },[])

    return (
        <>
            <h4>ALL INVENTORY</h4>
            {items.length > 0 && (
                items.map(item => (
                    <InventoryCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        quantity={item.inventory_details.length}
                    ></InventoryCard>
                ))
                
            )}
            
        </>
    )
}

export default InventoryList
