import React, {useEffect,useState} from 'react';
import uuid from 'react-uuid';
import { FaTrash } from 'react-icons/fa';


const Todo = (props) => {
    const [input,setInput] = useState("");
    const [list,setList] = useState(JSON.parse(localStorage.getItem('todos')) || []);

    // add task

    const submitHandler = (e) => {
        e.preventDefault();
        setList([...list, {content:input, id: uuid(), isDone: false}])
        console.log(list)
   
        //empty input



        setInput("")


    }
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(list))
    },[list])
    const deleteTask =(id)=>{
        setList(list.filter(e=>e.id !== id))
    }
  return (
    <div>
        <h1>todo list</h1>
    <div className='main'>
    <div className='form'>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="add new task" onChange={(e)=>setInput(e.target.value)}/>
            


             <input type="submit" value="add" />

        </form>
        <div className='tasks'>
        {list.map((task)=>{
                return(
                    <div key={task.id} className='task'>
                       <p 
                       style={
                        task.isDone
                        ? {textDecoration :'line-through'}
                        : {textDecoration :'none'    }
                        } 
                        >
                        {task.content}
                        </p> 
                        <input type="checkbox" 
                        checked={task.isDone}
                        onChange={()=>{
                            setList((prevstate)=>{
                                const newList = prevstate.map((item)=>{
                                    return item.id === task.id?{...item, isDone: !item.isDone}: item;
                                        
                                });
                                return newList
                            })
                        }} />
                        <FaTrash onClick={()=>deleteTask(task.id)} className="trash"/>
                    </div>
                )
            })}
        </div>
        </div>
        </div>
    </div>
  )
}

export default Todo;