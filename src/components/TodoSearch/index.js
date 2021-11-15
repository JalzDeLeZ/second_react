import React from 'react'; 
import { TodoContext } from '../../Context';
import './TodoSearch.css';

function TodoSearch_C() {

  const {currently_search, upgrate_search} = React.useContext(TodoContext)
  
  
  const fSearch = (pEvent) =>{
    console.log(pEvent.target.value);
    upgrate_search(pEvent.target.value);
  };

  return (

    <input 
    className="cTodoSearch" 
    placeholder="Ingrese los Datos de su Busqueda" 
    value = {currently_search}
    onChange = {fSearch}
    />
  );
}

export { TodoSearch_C };