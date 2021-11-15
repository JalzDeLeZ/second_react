import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton_C(props) {

  const onClickButton = (pMsj) => {
    alert(pMsj);
  };

  return (
    <button 
      className="cCreateTodoButton" 
      onClick={() => onClickButton('♦')}>
      +
    </button>
  );
}

export { CreateTodoButton_C };
