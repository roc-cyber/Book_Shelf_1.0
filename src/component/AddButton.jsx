import React,{useState} from 'react'

function Add(){
  const [name,setName]=useState('');
  const [newName,setNewName]=useState([]);

  function handleChange(e){
    setName(e.target.value);
  }
  function handleClick(){
    setNewName(name);
  }
  return (
    <div>
      <h3 style={{color:'#f52265'}}>Please give your review {newName}</h3>
      <input type='text' placeholder='Please rate the Book out of 5*****' onChange={handleChange} value={name}/>
      <button onClick={handleClick}>RATE</button>
    </div>
  )
}

export default Add;
