import React from 'react';
import './TodoCounter.css';

function TodoCounter_C( {pTotal,pChecked} ){
     
    return(
        <h2 className="cTitle">Has Completado {pChecked} de {pTotal} Todos</h2>
    )
}

export  {TodoCounter_C};