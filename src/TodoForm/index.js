import React from "react";
import { TodoContext } from "../Context";
import './style.css'

function FormModal_C(){

    const { vfAddList , 
            upgrate_openModal
            } = React.useContext(TodoContext);

    const [currently_value, upgrate_value] = React.useState('');
      
    const mOnChange = (pEvent) =>{
        upgrate_value(pEvent.target.value);
        console.log(pEvent.target.value) 
    }

    const mCancel = () => {
        upgrate_openModal(false)
    }
    const mSubmitAdd = (pEvent) => {
        pEvent.preventDefault(); 
        vfAddList(currently_value);
        upgrate_openModal(false) 
    }

    return(
        <form onSubmit={mSubmitAdd}> 
            <label>Escribe tu nuevo TODO</label>
            <br/>
            <textarea 
                value = {currently_value}
                onChange={mOnChange}
                placeholder="Ingrese una Tarea"
                />
            <div className="TodoForm-buttonContainer">
                <button 
                    onClick={mCancel}
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    >
                    Cancelar
                </button>
                
                <button  
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                    >
                    Añadir
                </button>
            </div>
        </form>
    )

}

export {FormModal_C}


/* const [currently_valueAdd, upgrate_valueAdd] = React.useState('');

    const {vfAddList} = React.useContext(TodoContext)

    const fOnCancel = ()=>{

    }
    const fOnAdd = (event)=>{
        event.preventDefault();
        vfAddList(currently_valueAdd)
    }
    const fChange = (event)=>{
        upgrate_valueAdd(event.target.value)
    }

    return(
        <form onSubmit={fOnAdd}>
            <label>...</label>
            <textarea
                value={currently_valueAdd}
                onChange={fChange}
                placeholder="Cortal la cebolla para el almuerzo"
            />
            <div>
                <button
                    type="button"
                    onClick={fOnCancel}
                >Cancelar
                </button>
                <button
                    type="submit"
                    onClick={fOnAdd}
                >Añadir
                </button>
            </div>
        </form>
    ) */