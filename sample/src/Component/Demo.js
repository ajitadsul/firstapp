import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function Demo(props) {
  const [data,setData]=useState({})  
  const handleChange=()=>{
    document.getElementById('labelId').innerText='kllk'
    console.log(document.getElementById('labelId').disabled)
  }
  return (
    <>
      <div>
      <label htmlFor='custId' id="labelId">Customer Id : </label>
      <input type='text' id='custId' onChange={handleChange} disabled />
      </div>
    </>
  )
}

export default Demo
