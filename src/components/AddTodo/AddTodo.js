import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'

const AddTodo = ({onAdd}) => {
    const [text, setText]=useState('');
    const handleChange=(e)=>setText(e.target.value)

    const handleSubmit=(e)=>{
        e.preventDefault();
        // if(text.trim() === ''){  //아래와 같이 작성해도 됨//빈문자열이 들어가면 입력되지 않도록 한다.//trim()문자를 사용했기때문에 앞뒤의 여백이 없어진다.  
        if(text.trim().length === 0){
            return;
        }
        onAdd({id:uuidv4(),text:text,status:'active'});
        setText('')
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text"  placeholder='Add Todo' value={text} onChange={handleChange}/>
        <button className={styles.button}>Add</button>
    </form>
  )
}

export default AddTodo