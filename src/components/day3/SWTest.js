import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SWTest = () => {

    const [name, setName] = useState('Loading')

    useEffect( () => {
        
        
        axios.get('https://swapi.co/api/people/1')
        .then( (res, error) => {
            setName(res.data.name)
        })
    },[])// 파라미터로 마지막에 빈 배열 넣어주면 페이지 로딩할때 한 번만 작동


    return(
        <h1>
            {name}
        </h1>
    )
}

export default SWTest