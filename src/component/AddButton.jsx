import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

function Add({key,author}){
  const [count, setcount]=useState(0);

  function inc(){
    setcount(count+1);
  }

  function dec(){
    if(count<=0){
      return;
    }
    setcount(count-1);
  }
  return (
    <div>
      <button className='Add-count' onClick={inc}>+</button>
      <h5 style={{color:'silver-black'}}>Quantity: {count}</h5>
      <button className='remove-count' onClick={dec}>-</button>{' '}
      <Button className='Add-button1' variant="outline-success" onClick={()=>alert(`Total ${count} of the ${author} books has been added to your Cart!`)}>Add to Chart</Button>{'   '}
      <Button className='Add-button2' variant="outline-success" onClick={()=>console.log(`${author} book order is placed, Successfully!!!`)}>Placed the order</Button>
    </div>
  )
}

export default Add;
