
import './App.css';
import InputDetails from './Component/InputDetails';
import Congratulation from './Component/Congratulation';
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import {usertAuth} from './WorkinContext/CreateContext'
function App() {
  const [authState,setAuthState] = useState({
    phone: "",
    surname: "",
    name: "",
    error: ""
  })
  return (
    <div className="App">
      <usertAuth.Provider value={{authState,setAuthState}}>
     <Routes>
      <Route path='/' element={<InputDetails />}/>
      <Route path='/congratulations' element={<Congratulation/>}/>
     </Routes>
   </usertAuth.Provider>
    </div>
  );
}

export default App;
