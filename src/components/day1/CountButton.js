import React from 'react'

const CountButton = ({label, fn, amount}) => {

    return (
        <div>
            <button onClick={() => fn(amount)}>{label}</button>
        </div>
    )
}

export default CountButton;