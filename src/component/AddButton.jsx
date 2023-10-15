import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

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
      <h3 style={{color:'silver-black'}}>Your Review: {newName}</h3>
      <input className='input' type='text' placeholder='Please rate the Book out of 5*****' onChange={handleChange} value={name}/>{' '}
      <Button className='Add-button' variant="outline-success" onClick={handleClick}>Success</Button>
      
    </div>
  )
}

export default Add;
