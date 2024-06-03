import axios from 'axios';

const baseUrl='https://fullstack1-backend.onrender.com'


const getAllToDo= (setToDo)=>{    
    axios
        .get(baseUrl)
        .then((response)=>{console.log("data loaded.....", response.data);
            setToDo(response.data)
        })
        .catch((err)=>{console.log(err)})
    }

const addToDo=(text,setText,setToDo)=>{
    axios
        .post(`${baseUrl}/save`,{text})
        .then((response)=>{console.log(response.data);
            setText("");
            getAllToDo(setToDo)
        })
        .catch((err)=>{console.log(err)})

}
    
const updateToDo=(toDoId,text,setText,setToDo, setIsUpdating)=>{
    axios
        .post(`${baseUrl}/update`,{_id:toDoId, text})
        .then((response)=>{console.log(response.data);
            setText("");
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err)=>{console.log(err)})

}

const deleteToDo=(_id,setToDo)=>{
    axios
        .post(`${baseUrl}/delete`,{_id})
        .then((response)=>{console.log(response.data);
            getAllToDo(setToDo)
        })
        .catch((err)=>{console.log(err)})

}
export {getAllToDo,addToDo,updateToDo, deleteToDo}