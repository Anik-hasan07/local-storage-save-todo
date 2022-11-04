import React from 'react'
import Todo from './Todo';

const Todos = ({todos,onRemoveTodo,onEditTodo}) => {
    // console.log(todos);
  return (
    <div>
    {
      todos.map((todo,index)=>(
        <div key={index}>
            <Todo todo={todo.todo} id={todo.id} onRemoveTodo={onRemoveTodo} onEditTodo={onEditTodo}/>
        </div>
      ))
    }
    </div>
  )
}

export default Todos
