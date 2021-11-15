 //import './App.css';
import React from "react";
import {AppUI} from './AppUI.js'
/* 
const aoListTempDefault = [
  { text: 'Cortar Cebolla', completed:false },
  { text: 'Tomar el Cuso de Intro con React', completed:true },
  { text: 'Lorem Ipsus', completed: true },
  { text: 'Miroquezada Rha', completed:false }
] */

function useLocalStorage(keyItem, initialValue){

  const[currently_loading, upgrate_loading] = React.useState(true);
  const[currently_error, upgrate_error] = React.useState(false);
  //>>>>>>>>  LOCAL STORAGE
  const [currently_item, upgrate_item] = React.useState(initialValue);

  React.useEffect(() =>{
    
    
    setTimeout(()=>{
      try {
      
        let vaListAux;

        const localStorageItem = localStorage.getItem(keyItem);
        
        if(!localStorageItem){
          localStorage.setItem(keyItem, JSON.stringify( initialValue ));
          vaListAux = initialValue;
        }
        else{
          vaListAux = JSON.parse(localStorageItem);
        }

        upgrate_item(vaListAux);
        upgrate_loading(false);
      }

      catch (error) {
        upgrate_error(error)
      }

    }, 1000);
  });



  
  //fPuente
  const cnxItem = (pList) =>{
    try {
    
      const vaStringItem = JSON.stringify(pList);
      localStorage.setItem(keyItem, vaStringItem);
      upgrate_item(pList)
    
    } catch (error) {
       upgrate_error(error)
    }
  };

  return{
    currently_item,
    cnxItem,
    currently_loading,
    currently_error
  };
}

function App() {

  const {
    
    currently_item: currently_list,
    cnxItem: cnxTodos,
    currently_loading,
    perror: currently_error

                        } = useLocalStorage('keyOne',[]);                                //>>>ESTADO / ACTUALIZACION DEL ESTADO
   /* const [currently_name, cnxName] = useLocalStorage('keyTwo_name','Jalz DeLe^Z');  */                //>>>ESTADO / ACTUALIZACION DEL ESTADO

  //>>>>>>>>  PROGRAMACION
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
/* 
  console.log('Render AAA (antes del Use Effect)');

  //USE EFFECT >>> 
  React.useEffect(()=>{
    console.log('use effect');
  }, [vTotalList]);

  console.log('Render FFF (despues del Use Effect)'); */

  return [

    /*  <p>{currently_name}</p>, */
 
    <AppUI  
      ploading        = {currently_loading}
      pError          = {currently_error}
      vTotalList      = {vTotalList}
      vCheckedList    = {vCheckedList} 
      currently_search= {currently_search}
      upgrate_search  = {upgrate_search}  
      aAux            = {aAux}
      vfListCheck     = {vfListCheck}
      vfListDelete    = {vfListDelete}
    />
  ];
}

export default App;