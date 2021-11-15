import React from 'react';
import './TodoList.css';

function TodoList_C(props) {
  return (
    <section>
      <ul>
        {props.children} 
      </ul>
    </section>
  );
}

export { TodoList_C };
