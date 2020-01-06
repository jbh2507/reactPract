import React, {useState} from 'react'
import QuizInput from './QuizInput';
import QuizBoard from './QuizBoard';

const QuizComponent = () => {

    //const [quiz, setQuiz] = useState([])

    //setQuiz(quizList);

    const arr = [
                    {title:"Quiz1", answer:"1"},
                    {title:"Quiz2", answer:"2"},
                    {title:"Quiz3", answer:"3"},
                    {title:"Quiz4", answer:"4"},
                    {title:"Quiz5", answer:"5"}
                ]
    
    const [idx, setIdx] = useState(0)

    const [end, setEnd] = useState(false)

  

    const checkAnswer = (value) => {
        console.log("checkAnser()")
        if(arr[idx].answer === value && idx != arr.length-1) setIdx(idx+1);
        if(arr[idx].answer === value && idx === arr.length-1) {
            setEnd(true)
        }
        if(arr[idx].answer != value) {
            
            setEnd(true)
        }
    }

    return (
        <>
        {end? 
            <h1>ens</h1>: 
            <>
                <QuizBoard title={arr[idx].title}></QuizBoard>
                <QuizInput fn={checkAnswer}></QuizInput>
            </>
            }
        
        </>
    )
}

export default QuizComponent;