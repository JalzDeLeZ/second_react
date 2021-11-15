import React from "react";
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
    
        currently_item: currently_list,
        cnxItem: cnxTodos,
        currently_loading,
        currently_error
    
                            } = useLocalStorage('keyOne',[]); 

      const [currently_search, upgrate_search] = React.useState('');
      const vCheckedList = currently_list.filter(fAux => !!fAux.completed).length;
      const vTotalList = currently_list.length;
    
      let aAux = [];
    
    
      if (!currently_search.length >= 1){
        aAux = currently_list;
      }
      else{
    
        aAux = currently_list.filter(
          fAux2 => {
            const vText_to_array = fAux2.text.toLowerCase();
            const vText_inn_search = currently_search.toLowerCase();  
            return vText_to_array.includes(vText_inn_search);
         }
        );
      }
    
    
      const vfListCheck = (pText) => {
        const vUnique = currently_list.findIndex(fAux3 => fAux3.text === pText);
        const aNewList =[...currently_list];
        aNewList[vUnique].completed = true;
        //upgrate_list(aNewList);
        cnxTodos(aNewList);
      };
    
      const vfListDelete = (pText) => {
        const vUnique = currently_list.findIndex(fAux3 => fAux3.text === pText);
        const aNewList =[...currently_list];
        aNewList.splice(vUnique,1);
        //upgrate_list(aNewList);
        cnxTodos(aNewList);
      };

    return (
        <TodoContext.Provider value={{

            currently_loading,         
            currently_error,           
            vTotalList,       
            vCheckedList,     
            currently_search, 
            upgrate_search,    
            aAux,             
            vfListCheck,      
            vfListDelete,   
        }}>
            {props.children}
        </TodoContext.Provider>
    );

}

export {TodoContext, TodoProvider}



/* 
ploading        = {currently_loading}
pError          = {currently_error}
vTotalList      = {vTotalList}
vCheckedList    = {vCheckedList} 
currently_search= {currently_search}
upgrate_search  = {upgrate_search}  
aAux            = {aAux}
vfListCheck     = {vfListCheck}
vfListDelete    = {vfListDelete} */