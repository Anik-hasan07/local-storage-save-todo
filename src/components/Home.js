import React, { useEffect, useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'
import {v4 as uuidv4} from "uuid"

const getLocalStorage = ()=>{
      let todos = localStorage.getItem("todos")
      if(todos){
        return (todos=JSON.parse(localStorage.getItem("todos")))
      }else{
        return[];
      }
 }
const Home = () => {
    const[todos,setTodos] = useState(getLocalStorage())
    const[edit,setEdit] = useState(true)
    const[editItem,setEditItem] = useState(true)

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])


    const handleAddTodo=(todo)=>{
        setTodos([...todos,{id:uuidv4(),todo}])
        console.log(todos);
    }

    const handleEditTodo = (id)=>{
      const selectedItem = todos.find((todo)=>todo.id===id)
      
     setEdit(false)
     setTodos(selectedItem.title)
  }

    const handleRemoveTodo=(id)=>{
      const filteredTodo = todos.filter((todo)=>todo.id!==id)
      setTodos(filteredTodo)
      
    }

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} onEditTodo={handleEditTodo}/>
    </div>
  )
}

export default Home
