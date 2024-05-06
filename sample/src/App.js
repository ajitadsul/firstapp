//import logo from './logo.svg';
import './App.css';
import Demo from "./Component/Demo.js"
import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
function App() {
  const custDetails=[{
    custIdd:1,
    name:"Jack",
    contact:123451
  },{
    custIdd:2,
    name:"Jack2",
    contact:123452
  },{
    custIdd:3,
    name:"Jack3",
    contact:123453
  }]
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ]);
  return (
    <div className="App">
      <AgGridReact rowData={rowData} columnDefs={colDefs}/>
      <Demo cust={custDetails}/>
    </div>
  );
}

export default App;
