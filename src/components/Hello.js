import React from 'react'

const Hello = ({event, name}) => {

    console.log("Hello componet is loaded..");
    
    return (
    <h1 onClick={() => event(name)}>Hello React {name}</h1>
        
    )
}

export default Hello;