import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import styles from './Todo.module.css'

const Todo = ({todo, onUpdate, onDelete}) => {
  //console.log(todo)
  const {id,text,status}=todo;
  const handleChange=(e)=>{
    const status=e.target.checked?"completed":"active";
    //onUpdate({...todo,status:status})
    onUpdate({...todo,status})
  }

  const handleDelete=()=>onDelete(todo)
  return (
  <li className={styles.todo}>
    <input 
    className={styles.checkbox}
    type="checkbox"  
    id={id} 
    checked={status==="completed"}
    onChange={handleChange}
    />
    <label htmlFor={id} className={styles.text}>{todo.text}</label>
    <span className={styles.icon}>
      <button className={styles.button}  onClick={handleDelete}><FaTrashCan /></button>
      </span>
  </li>
  )
}

export default Todo