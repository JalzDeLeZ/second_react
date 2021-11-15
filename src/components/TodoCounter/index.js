import React from 'react';
import { TodoContext } from '../../Context';
import './TodoCounter.css';

function TodoCounter_C(  ){
     const {vTotalList,vCheckedList} = React.useContext(TodoContext);
    return(
        <h2 className="cTitle">Has Completado {vCheckedList} de {vTotalList} Todos</h2>
    )
}

export  {TodoCounter_C};