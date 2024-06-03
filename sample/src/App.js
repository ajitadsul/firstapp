//import logo from './logo.svg';
import './App.css';
//import pract from "./Practice.js"
import React, { createContext, useEffect, useState,useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Demo from './Component/Demo';
import { Link } from 'react-router-dom';
import Login from './Component/Login';
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode"
const data=createContext()
function App({children}) {
  
  //localStorage.setItem("token","1234521")
  //sessionStorage.setItem("token1",112233)
  const ll=localStorage.getItem("token")
  const lll=sessionStorage.getItem("token1")
  const [creds,setCreds]=useState({username:"",password:"",permission:""})
  const locationn=useLocation()
  console.log(locationn);
  console.log(ll);
  console.log(lll);
  const navigate=useNavigate()
  const handleUser=(e)=>{
    setCreds({...creds,[e.target.name]:e.target.value})
  }
  var ele=null
  const submitt=()=>{
    if((creds.username=='admin' || creds.username=='user') && creds.password=="1234"){
      if(creds.username=='user'){
      setCreds({...creds,permission:'viewHome'})
      }
      else{
      setCreds({...creds,permission:'viewProfile'})
      }
     navigate("/demo")
    }
    else{
      navigate("/invalid")
    }
    
  }
  return(
    <>
    <br/>
    <label>Username : </label>
    <input type="text" name="username" onChange={handleUser}></input>
    <br/>
    <label>Password : </label>
    <input type="password" name="password" onChange={handleUser}></input>
    <br/>
    <button onClick={submitt}>LogIn</button>
    <br/>   
    
   
    </>
  )
}
export default App;
export {data}