//import logo from './logo.svg';
import './App.css';
import Demo from "./Component/Demo.js"
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
  return (
    <div className="App">
      <Demo cust={custDetails}/>
    </div>
  );
}

export default App;
