import React, {useState} from 'react'

const QuizInput = ({fn}) => {

    const [text, setText] = useState("")

    const handleChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }

    const handleClick = (e) => {
        console.log("clicked")
        fn(text)
        setText("")
    }

    return (
        <>
        <input type='text' onChange={handleChange} value={text}></input>
        <button onClick={handleClick}>submit</button>
        </>
    )
}

export default QuizInput;