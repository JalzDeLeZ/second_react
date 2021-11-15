import React from "react";

    

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
  
  

  export {useLocalStorage}