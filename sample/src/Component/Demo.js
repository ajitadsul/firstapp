import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios, { Axios } from 'axios';
function Demo(props) {
  const [data1,setData]=useState([])  
  const handleChange=()=>{
    document.getElementById('labelId').innerHTML=`<h1>okk</h1>`
    console.log(document.getElementById('custId').value)
  }

  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2').then((response)=>{
      setData(response.data.data)
      console.log(response.data.data)
    })
  },[])

    // Row Data: The data to be displayed.
    
  return (
    <>
      <div>
      <label htmlFor='custId' id="labelId">Customer Id : </label>
      <input type='text' id='custId' onChange={handleChange}  />
      </div>
      <table border={'border'}>
        <thead>
          <tr>
            <th>Id</th>
            <th>E-Mail</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((res)=>{
            return(   
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.email}</td>
                <td>{res.first_name}</td>
                <td>{res.last_name}</td>
                <td>{res.avatar}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </>
  )
}

export default Demo
