//import logo from './logo.svg';
import './App.css';
import { Axios } from 'axios';
//import pract from "./Practice.js"
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
function App(props) {
  var ele=false
  const [idd,setId]=useState(0)
  const [namee,setName]=useState('')
  const [data,setData]=useState([{id:'',name:''}])
  const abcc=(event)=>{
    setId(event.target.value)
  }

  const abcc2=(event)=>{
    setName(event.target.value)  
  }
  const abcc3=()=>{
        setData([...data,{id:idd,name:namee}])
        console.log(data);
  }
  function deletee(j){
    //Reflect.deleteProperty(data[j],['name'])
    setData(data.filter((item,i)=>i!=j))
    console.log("okhj",data);
  }
  return (
    <div className="App">
      <form>
      <label htmlFor='aa' >Enter ID :&nbsp;</label>
       <input type='text' id="aa" className="abc" name="name1"  onChange={abcc} style={{'backgroundColor':'yellow'}}></input>
       <br/>
       <label htmlFor='aa'>Enter Name :&nbsp;</label>
       <input type='text' id="aa2" className="abc" onChange={abcc2}></input>
       <br/>
       <button type='button' id='add' onClick={abcc3}>Add</button>
       </form>
       <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Button</th></tr>
        </thead>
        <tbody>
          {data.map((e,i)=>{return (<tr key={e.id}><td>{e.id}</td><td>{e.name}</td>{e.id!='' &&<td><button type='button' onClick={()=>deletee(i)}>Delete</button></td>}</tr>)})}
        </tbody>
       </table>
       <div>
        Hi Khushi
       </div>
       <textarea rows={5} columns={5}></textarea>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
       <h1>a</h1>
    </div>
  );
}

export default App;
