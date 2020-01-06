import React, { useState } from "react"
import ItemList from "./ItemList"
import ItemTotal from "./ItemTotal"
 
const ItemComponent = ({arr}) => {

    const [items, setItems] = useState(arr)

    const [total, setTotal] = useState(0)

    const changeItem = (pno, amount) => {
        items.filter( e => e.pno == pno)[0].amount = parseInt(amount)
        console.log(pno+"'s amount was changed to "+amount)

        setItems(items)

        let sum = 0;
        items.forEach( item => sum += item.price * item.amount)

        setTotal(sum)
    }

    return(
        <div>
            <h1>ItemComponent</h1>
            <ItemList arr={items} changeItem={changeItem}></ItemList>
            <hr/>
            <ItemTotal total={total}></ItemTotal>
        </div>
    )
}
export default ItemComponent