import Button from 'react-bootstrap/Button';
import React, { useEffect, useRef, useState } from 'react'

const NewTodo = ({onAddTodo}) => {
    const[todo,setTodo] = useState({title:""})
    const{title}=todo;
    const inputRef = useRef(null)

    useEffect(()=>{
      inputRef.current.focus();
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        onAddTodo(todo);
        setTodo({title:""})
        console.log(todo);  
    }
    
    const handleChange=(e)=>{
        const name = e.target.name;
        setTodo({...todo,[name]:e.target.value})
       
    }
   
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label >Title:</label>
            <input value={title} onChange={handleChange} type="text" id="title" name="title" ref={inputRef}/>
        </div>
        <br/>
        {/* <div>
            <label >Desc:</label>
            <textarea value={desc} onChange={handleChange}  type="text" id="desc" name="desc" />
        </div> */}
      
      <Button variant="outline-dark" type='submit'>Add todo</Button>
      
    
    </form>
  )
}

export default NewTodo
