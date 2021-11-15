
import React from "react";
import {AppUI} from './AppUI.js' 
import {TodoProvider} from '../Context/index'


function App() {
 

  return [ 
    <TodoProvider>

        <AppUI />
        
    </TodoProvider>
  ];
}

export default App;