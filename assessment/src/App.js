import React from 'react';
import './App.css';
import  Form from  "./Form";
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Userdata from './Userdata';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Form />} />
    <Route path='/userdata' element={<Userdata />} />
    </Routes>
    
    </BrowserRouter>

    
  )
}

export default App;
