import React, {useState} from 'react'

const ItemDetails = ({pno, pname, price, amount, changeItem}) => {
    const [amountValue,setAmountValue] = useState(amount)

    const handleChange = (e) => {
        setAmountValue(e.target.value)
        changeItem(pno, e.target.value)
    }

    const src ="/samples/"+pname+".jpg"

    return (
        <div>
<span><img src={src}></img> {pname}</span> <input type='number' value={amountValue} onChange={handleChange}></input> {price}
        </div>
    )
}

export default ItemDetails