import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloBox from './components/HelloBox';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';
import QuizComponent from './components/quiz/QuizComponent';
import LoopEx from './components/day3/LoopEx';
import ItemComponent from './components/day3/ItemComponent';
import SWTest from './components/day3/SWTest';

function App() {

  
  const arr = [
    {pno:1, pname:"01", price: 3000, amount: 0},
    {pno:2, pname:"02", price: 10000, amount: 0},
    {pno:3, pname:"03", price: 39800, amount: 0},
    {pno:4, pname:"04", price: 5000, amount: 0},
    {pno:5, pname:"05", price: 15000, amount: 0}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <SWTest></SWTest>

        <hr/>

        <ItemComponent arr={arr}></ItemComponent>

        <hr/>
        <LoopEx></LoopEx>

        <hr/>
        <QuizComponent></QuizComponent>

        <hr/>

        <CountHookComponent></CountHookComponent>
      </body>
    </div>
  );
}

export default App;
