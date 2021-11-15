import React from 'react';
import './TodoItem.css';

function TodoItem_C(props) {
    
 /* const fCompleted = () =>{
    alert('Completed Todo '+props.text)
  }; */
  /* const fDeleted = () =>{
    alert('Borraste el Todo '+props.text)
  }; */
  
  return (
    <li className="cTodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onCompleted}>
        √
      </span>
      
      <p className={`cTodoItem-p ${props.completed && 'cTodoItem-p--complete'}`}>
        {props.text}
      </p>

      <span
        className="Icon Icon-delete" 
        onClick={props.onDeleted}>
        X
      </span>
    </li>
  );
}

export {TodoItem_C};
