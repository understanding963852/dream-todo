import React, { useEffect, useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'
import styles from './TodoList.module.css'

export default function TodolIst({filter}) {
    const [todos, setTodos]=useState(readTodosFromLocalStorage)

  //console.log(todos)
const handleAdd=(todo)=>setTodos([...todos,todo])
const handleUpdate =(updated)=>
setTodos(todos.map(t => (t.id === updated.id? updated : t)))

const handleDelete=(deleted)=>setTodos(todos.filter(t=>t.id !== deleted.id))

const filtered=getFilteredItems(todos, filter)

useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(todos))

},[todos])//todos의 값이 바뀔때마다  함수가 다시 실행된다.

  return (
    <section className={styles.container}>
      <ul className={styles.list} >
        {
          filtered.map(item=>(
          <Todo 
          key={item.id} 
          todo={item}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          ></Todo>))
        }
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  )
}

function readTodosFromLocalStorage(){
 const todos=localStorage.getItem('todos');
 return todos?JSON.parse(todos):[];
}

function getFilteredItems(todos, filter){
if(filter==='all'){
  return todos;
}

return todos.filter((todo)=>todo.status === filter)
}