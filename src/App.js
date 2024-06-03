import { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import './index.css';
import { addToDo, deleteToDo, getAllToDo, updateToDo} from './utils/HandleApi';
function App() {

  const [toDo, setToDo]= useState([]);
  const [text,setText]= useState("");
  const[isUpdating,setIsUpdating]=useState(false);
  const [toDoId,setToDoId]= useState("");


  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="app">
      <div className='container'>
        <h1>To Do App</h1>
        <div className='top'>
          <input 
            type="text" 
            placeholder="add todo task"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}></input>
          <button className='button' onClick={isUpdating? ()=> updateToDo(toDoId,text,setText,setToDo,setIsUpdating):()=>addToDo(text,setText,setToDo)} >{ isUpdating ? "Update": "add"}</button>
        </div>
        <div className='list'>
          {
            toDo.map((item)=> (<ToDo 
              key={item._id} 
              text={item.text}
              updateMode={()=>updateMode(item._id,item.text)}
              deleteToDo={()=>deleteToDo(item._id,setToDo)}
              />))
          }
        </div>   
       </div>
    </div>
  );
}

export default App;
