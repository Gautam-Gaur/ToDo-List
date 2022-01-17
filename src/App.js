import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

const[inputList, setInputList] = useState("");
const [Items, setItems] = useState([]);
const itemEvent = (event) => {
setInputList(event.target.value);
};

const listOfItems = () => {
  setItems((oldItems) => {
    return [...oldItems, inputList];
  });

} ;

  return (<>
    <div className="main_div">
      <div className="center_div">
<br />
<h1>ToDo List</h1>
<br />
<input type="text" placeholder="Add an Item" onChange={itemEvent} />
 <button onClick={listOfItems}>+</button>
 <ol>
   <li>
     {/* {inputList} */}

     {Items.map( (itemval) => {
       return <li> {itemval} </li>
     } )}
   </li>
 </ol>
 
      </div>
    </div>


  </>
  )
};

export default App;
