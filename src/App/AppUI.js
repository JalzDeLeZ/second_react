import React from "react";
import {TodoCounter_C} from '../components/TodoCounter'
import {TodoItem_C} from '../components/TodoItem'
import {TodoList_C} from '../components/TodoList'
import {TodoSearch_C} from '../components/TodoSearch'
import {CreateTodoButton_C} from '../components/CreateTodoButton'
import {TodoContext} from '../Context/index'
import {Modal_C} from '../Modal/index'
import {FormModal_C} from '../TodoForm/index'


import { TodosError } from '../TodosError/index.js';
import { TodosLoading } from '../TodosLoading/index.js';
import { EmptyTodos } from '../EmptyTodos/index.js';

function AppUI( ){

    const { 
        currently_loading,
        currently_error, 
        currently_search, 
        aAux,
        vfListCheck,
        vfListDelete, 
        currently_openModal,
        upgrate_openModal
        } = React.useContext(TodoContext)
    
    return (
        <React.Fragment>

            <TodoCounter_C/>

            <TodoSearch_C/>

            
            <TodoList_C>

                {currently_error && <TodosError />}
                {currently_loading && <TodosLoading />}
                {(!currently_loading && !aAux.length) && <EmptyTodos />}

                {aAux.map(fAux =>(
                    <TodoItem_C 
                        key         = {fAux.text}
                        text        = {fAux.text}
                        completed   = {fAux.completed}
                        onCompleted = {() => vfListCheck(fAux.text)}
                        onDeleted   = {() => vfListDelete(fAux.text)}
                    />
                ))}

                {currently_openModal && (
                    <Modal_C> 
                        <FormModal_C></FormModal_C>
                        {/* <p>---X{aAux[0]?.text}X---</p> */}
                    </Modal_C>
                )}
                
            </TodoList_C> 
            
            <CreateTodoButton_C
                upgrate_openModal={upgrate_openModal}
            />

    </React.Fragment>
    );
}

export {AppUI};
 