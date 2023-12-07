import React,{useState} from 'react';
import './App.css';

export const Button = () => {

const[name,setName]=useState(true);
function clicking(){
    setName(!name);
}

  return (
    <div>
      <button onClick={clicking}>TOGGLE</button>
      <button className='toggle' style={{backgroundColor:!name? 'red':'yellow'}}></button>
    </div>
  )
}

export default Button
