import React, {useState} from 'react'
import CountBoard from './CountBoard'
import CountButton from './CountButton'

const CountHookComponent = () => {

    const [count, setCount] = useState(0)   // useState's param is init val of count

    const changeCount = (amount) => {
        setCount(count + amount)
    }

    return (
        <>
            <CountBoard num={count}></CountBoard>
            <CountButton label="+" fn={changeCount} amount={1}></CountButton>
            <CountButton label="-" fn={changeCount} amount={-1}></CountButton>
        </>
    )
}

export default CountHookComponent;