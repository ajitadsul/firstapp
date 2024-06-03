import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { useContext } from 'react';
import { data } from '../App';
import { AuthProvider } from '../provider/AuthProvider';
const Demo = () => {
  const locationn=useLocation()
  console.log(locationn);
  const tt=useContext(data)
  const navigate=useNavigate()
  
  return ( 
    <div>
      <h1>Inside Div</h1>
      <data.Provider value={'creds'}></data.Provider>
      {tt}
      <Link to="/home">Home</Link>
      &nbsp;
      <Link to="/profile">Profile</Link>
      <br/>
      <br/>
      <button type="button" onClick={()=>{navigate(-1)}}>Back</button>
      &nbsp;
      <button type="button" onClick={()=>{navigate("/Authentication")}}>Forward</button>
    </div>
  );
};
export default Demo;
