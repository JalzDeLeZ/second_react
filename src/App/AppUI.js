import React from "react";
import {TodoCounter_C} from '../components/TodoCounter'
import {TodoItem_C} from '../components/TodoItem'
import {TodoList_C} from '../components/TodoList'
import {TodoSearch_C} from '../components/TodoSearch'
import {CreateTodoButton_C} from '../components/CreateTodoButton'

function AppUI({vTotalList, vCheckedList, currently_search, upgrate_search, aAux, vfListCheck, vfListDelete, 
                pError,ploading
            }){
    
    return (
        <React.Fragment>

            <TodoCounter_C
                pTotal      = {vTotalList}
                pChecked    = {vCheckedList}
            />

            <TodoSearch_C
                pCurrently  = {currently_search}
                pUpgrate    = {upgrate_search}
            />

            <TodoList_C>

                {pError && <p>Ah!!! Colapsus Brutus...</p>}
                {ploading && <p>Estamos cargando, no desesperes...</p>}
                {(!ploading && !currently_search.length) && <p>!Crea tu Primer Item</p>}

                {aAux.map(fAux =>(
                    <TodoItem_C 
                        key         = {fAux.text}
                        text        = {fAux.text}
                        completed   = {fAux.completed}
                        onCompleted = {() => vfListCheck(fAux.text)}
                        onDeleted   = {() => vfListDelete(fAux.text)}
                    />
               ))}
            </TodoList_C>
            
            <CreateTodoButton_C/>

    </React.Fragment>
    );
}

export {AppUI};