import React,{useState}from 'react'
import './App.css';

const Siding = () => {
    const [list,setList]=useState([]);
    const [name,setName]=useState("");

    const handleSubmit=(handleChange)=>{
      handleChange.preventDefault();
      const newitem={
        id:Math.random(),
        name,
      };
      if(name !== ' '){
        setList([...list,setList]);
        console.log(list);
        setName("");
      }
    }

  return (
       
      <div onSubmit={handleSubmit}>

        <h2>Notes</h2>
        <input type="text" value={name} id="input-cotent" className="text-box" onChange={(handleChange)=>setName(handleChange.target.value)} placeholder="Enter the input" autoFocus/>
        <textarea cols="30"
        class="area"
        rows="8"
        placeholder="type..."
        ></textarea>   
        <button class="add">ADD</button>

        <button class="edit_btn">EDIT</button>
        <button class="delete_btn">DELETE</button>
        {
          list.map((item)=>{
            return(
              <div key={item.id}>
                <h3>{item.name}</h3>
              </div>
            )
          })
        }
        
      </div>
      
      )
  }
  

export default Siding





