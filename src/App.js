import logo from './logo.svg';
import './App.css';
import Siding from './Siding';
import { useState } from 'react';
import Note from './Note';
import Button from './Button';
//upload sddata
function App() {
  
return(
  <div className='header'>
    Notes taking Application
    <Note/>
    <Siding/>
    <Button/>
  </div>
)
}
export default App