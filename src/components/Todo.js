import React from 'react'
import Button from 'react-bootstrap/Button';
const Todo = (props) => {
  // console.log(props);
    const{title}=props.todo;
    const{id} = props;
    const handleClick=(id)=>{
      props.onRemoveTodo(id)
    }
    const handleEdit=(id)=>{
      props.onEditTodo(id)
    }
  return (
    <article>
        <div>
        {title}
        

        </div>
        <div>
            <Button variant="outline-success" onClick={()=>{handleClick(id)}}>Delete</Button>
            <br/>
            <Button variant="outline-success" onClick={()=>{handleEdit(id)}}>Edit</Button>
        </div>

    </article>
  )
}

export default Todo
