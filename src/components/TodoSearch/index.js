import React from 'react'; 
import './TodoSearch.css';

function TodoSearch_C({pCurrently, pUpgrate}) {

  const fSearch = (pEvent) =>{
    console.log(pEvent.target.value);
    pUpgrate(pEvent.target.value);
  };

  return (

    <input 
    className="cTodoSearch" 
    placeholder="Ingrese los Datos de su Busqueda" 
    value = {pCurrently}
    onChange = {fSearch}
    />
  );
}

export { TodoSearch_C };