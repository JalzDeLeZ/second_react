import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton_C(props) {

  const onClickButton = () => {
    props.upgrate_openModal(fAuxState => !fAuxState)
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
