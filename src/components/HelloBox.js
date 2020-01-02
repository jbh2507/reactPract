import React from 'react'
import Hello from './Hello'
import Hello2 from './Hello2';

const HelloBox = () => {
    const fn = () => alert("act");
    return (
        <div>
            <Hello name={`user`} event={fn}></Hello>
            <Hello2></Hello2>
            <Hello name={`admin`} event={fn}></Hello>
        </div>
    )
}

export default HelloBox;