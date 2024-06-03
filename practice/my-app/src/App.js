//import logo from './logo.svg';
import './App.css';
import { Axios } from 'axios';
//import pract from "./Practice.js"
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function App(props) {
  const [indexx,setIndexx]=useState(0)
  const dataa=[{title:'abc',text:'Inside abc'},{title:'pqr',text:'Inside pqr'},{title:'jkl',text:'Inside jkl'},{title:'mno',text:'Inside mno'}]
  const nextt=()=>{
    if(indexx<dataa.length-1){
      setIndexx(indexx+1)
    }
    else{
      setIndexx(0)
    }
  }
  const prevv=()=>{
    if(indexx>0){
      setIndexx(indexx-1)
    }
    else{
      setIndexx(dataa.length-1)
    }
  }
  return (
    <>
    <div className="App">
    <h1>Hello World</h1>
      <h1>{dataa[indexx].title}</h1>
      <p>{dataa[indexx].text}</p>
    </div>
  <button type='button' onClick={prevv}>Prev</button>
  
  <button type='button' onClick={nextt}>Next</button>
    </>
  );
}

export default App;
